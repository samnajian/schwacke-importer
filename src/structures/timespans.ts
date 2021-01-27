import {IFileStructure} from "./types";

const timespansStructure: IFileStructure = [{
    version: 1,
    schema: {
        id: {
            length: 8,
            type: "integer"
        },
        schwacke_code: {
            length: 8,
            type: "integer"
        },
        valid_from: {
            length: 10,
            type: "timestamp",
        },
        valid_to: {
            length: 10,
            type: "timestamp"
        },
    },
    totalLength: 36,
    fileName: "timespans.dat",
    tableName: "timespans_v1",
    //Todo: implement insertQuery
    getInsertQuery: (fields) => ""
}];
export {
    timespansStructure
};
