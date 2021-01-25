import PgRx from "pg-reactive";
import {appConfig} from "../config";
import {tableQueries} from "./tables/tables";
import {catchError, mergeMap} from "rxjs/operators";
import {EMPTY, from} from "rxjs";

let db: PgRx | undefined;

const createTables = (db: PgRx) => {
    from(tableQueries).pipe(
        mergeMap((query: string) =>
            db.query(query).pipe(
                catchError(e => {
                    console.log(e);
                    return EMPTY;
                })
            )
        )
    ).subscribe(console.log);
};


const getDB = () => {
    if (!db) {
        db = new PgRx(appConfig.database.credentials);
        createTables(db);
    }
    return db;
};

export {getDB};