import {IMPORT_LOG_TABLE} from "./constants";

const logTableQuery = `CREATE TABLE IF NOT EXISTS ${IMPORT_LOG_TABLE} (
    id SERIAL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
    insert_count INT NOT NULL default 0,
    update_count INT NOT NULL default 0,
    invalid_count INT NOT NULL default 0
)`;
export {logTableQuery};