import {IInsertLog} from "./types";
import {getDB} from "../db";
import {IMPORT_LOG_TABLE} from "../db/tables/constants";
import {camelCaseToSnakeCase} from "../utility";

const logImportToDB = ({startDate, endDate, ...rest}: IInsertLog) => {
    const query = `INSERT INTO ${IMPORT_LOG_TABLE} 
    (start_date, end_date, ${Object.keys(rest).map(camelCaseToSnakeCase).join(",")}) 
    VALUES (TO_TIMESTAMP(${startDate}/1000.0), TO_TIMESTAMP(${endDate}/1000.0), ${Object.values(rest).join(",")} ) 
    `;
    return getDB().query(query).subscribe();
};

export {logImportToDB};