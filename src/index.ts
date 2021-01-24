import {createReadStream} from "fs";
import {createInterface} from "readline";
import {from, partition} from "rxjs";
import {count, map, mergeMap, tap} from "rxjs/operators";
import {join} from "path";
import {isLineValid, mapInterfaceToLine, mapLineToSchema} from "./utility";
import {structures} from "./structures";
import {appConfig} from "./config";


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
    tap(({partitioned: [, invalid], schema, fileName}) => {
        invalid.pipe(count(), tap(count => {
            console.log(`${fileName} has ${count} invalid lines`);
        })).subscribe();
    }),
    mergeMap(({partitioned: [validLines], schema}) => validLines.pipe(map(mapLineToSchema(schema)))),
    tap(console.log)
).subscribe((d) => {
});