import {createReadStream} from "fs";
import {createInterface} from "readline";
import {from, partition} from "rxjs";
import {count, map, mergeMap, tap} from "rxjs/operators";
import {join} from "path";
import {mapInterfaceToLine, mapLineToSchema} from "./utility";
import {rimsStructure} from "./structures";
import {appConfig} from "./config";

const fileNames = ["rims.dat"];

const filePaths = fileNames.map(fileName => join(appConfig.dataFolder, fileName));

const [linesWithValidLength, corruptLines] = partition(from(filePaths).pipe(
    map(filePath => createInterface({
        input: createReadStream(filePath)
    })),
    mergeMap(mapInterfaceToLine)),
    line => line.length === rimsStructure.v1.totalLength
);

linesWithValidLength
    .pipe(
        map((line: string) => mapLineToSchema(line, rimsStructure.v1.schema)),
        tap(console.log)
    )
    .subscribe();

corruptLines.pipe(
    count()
).subscribe(count => console.warn(`Lines have invalid length: ${count}`));
