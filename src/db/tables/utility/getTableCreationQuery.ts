import {ISchema} from "../../../structures/types";
import {camelCaseToSnakeCase} from "../../../utility";

const getTableCreationQuery = (tableSchema: ISchema, tableName: string) => {
    const fields = Object.keys(tableSchema)
        .map(name => `${camelCaseToSnakeCase(name)} ${tableSchema[name].type} NOT NULL`)
        .join(",\n ");

    return `CREATE TABLE IF NOT EXISTS ${tableName} (
        _id SERIAL,
        ${fields}
    )`;
};

export {getTableCreationQuery};