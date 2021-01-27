import {createReadStream} from "fs";
import {createInterface} from "readline";
import {forkJoin, from, Observable, partition} from "rxjs";
import {bufferCount, count, map, mergeMap, share, tap} from "rxjs/operators";
import {join} from "path";
import {extractLineFields, isLineValid, mapInterfaceToLine} from "./utility";
import {structures} from "./structures";
import {appConfig} from "./config";
import {ISchema} from "./structures/types";
import {logImportToDB} from "./logger";

const startDate = Date.now();

const saveValidLinesToDb = (validLines: Observable<string>, schema: ISchema) => {
    validLines.pipe(
        share(),
        map(extractLineFields(schema)),
        bufferCount(appConfig.batchSize), // We need to insert in batch to gain some performance boost
        tap(data => {
            // console.log({data, schema});
        }),
        // Todo: add insert
    ).subscribe();
};

from(structures).pipe(
    map(({fileName, ...rest}) => ({
        readLineInterface: createInterface({
            input: createReadStream(join(appConfig.dataFolder, fileName))
        }),
        ...rest,
        fileName
    })),
    map(({readLineInterface, ...rest}) => ({
        lines: mapInterfaceToLine(readLineInterface),
        ...rest
    })),
    map(({lines, schema, fileName}) => ({
        partitioned: partition(lines, line => isLineValid(line, schema)),
        schema,
        fileName
    })),
    tap(({partitioned: [validLines], schema}) => saveValidLinesToDb(validLines, schema)),
    mergeMap(({partitioned: [validLines, invalidLines], schema}) =>
        forkJoin([validLines.pipe(count()), invalidLines.pipe(count())]
        )
    ),
).subscribe(([insertCount, invalidCount]) => {
    logImportToDB({
        startDate,
        endDate: Date.now(),
        insertCount,
        updateCount: 0, // @Todo: take care of updating records and logging for them
        invalidCount
    });
});