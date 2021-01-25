import {IInsertLog} from "./types";
import {getDB, mapObjectToSQLPairs} from "../db";
import {IMPORT_LOG_TABLE} from "../db/tables/constants";

const logImportToDB = (loggable: IInsertLog) => getDB().query(`INSERT INTO ${IMPORT_LOG_TABLE} SET ${mapObjectToSQLPairs(loggable)}`).subscribe();

export {logImportToDB};