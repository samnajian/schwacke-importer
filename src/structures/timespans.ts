import {IFileStructure} from "./types";

const timespansStructure: IFileStructure = [{
    version: 1,
    schema: {
        id: {
            length: 8,
            type: "number"
        },
        schwacke_code: {
            length: 8,
            type: "number"
        },
        valid_from: {
            length: 10,
            type: "date",
        },
        valid_to: {
            length: 10,
            type: "date"
        },
    },
    totalLength: 36,
    fileName: "timespans.dat"
}];
export {
    timespansStructure
};
