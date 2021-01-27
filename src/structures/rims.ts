import {IFileStructure, IRimFields} from "./types";
import {camelCaseToSnakeCase} from "../utility";
import {createMultiInsertQuery} from "../db/tables/utility";


const tableName = "rims_v1";
const rimsStructure: IFileStructure = [{
    version: 1,
    schema: {
        code: {
            length: 5,
            type: "integer"
        },
        width: {
            length: 5,
            type: "integer"
        },
        height: {
            length: 1,
            type: "varchar"
        },
        one_piece: {
            length: 1,
            type: "varchar"
        },
        diameter: {
            length: 2,
            type: "integer"
        },
        material: {
            length: 1,
            type: "varchar"
        }
    },
    totalLength: 15,
    fileName: "rims.dat",
    tableName,
    getInsertQuery: (fields: IRimFields) => `INSERT INTO ${tableName}
            (${Object.keys(fields).map(camelCaseToSnakeCase).join(",")}) 
            VALUES (${createMultiInsertQuery(fields)}) 
    `
}];

export {
    rimsStructure
};
