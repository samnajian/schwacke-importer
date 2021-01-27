import {logTableQuery} from "./logTable";
import {getTableCreationQuery} from "./utility";
import {structures} from "../../structures";

const tableQueries: string[] = [
    logTableQuery,
    ...structures.map(structure => getTableCreationQuery(structure.schema, structure.tableName))
];

export {tableQueries};