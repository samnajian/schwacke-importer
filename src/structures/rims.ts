import {IFileStructure} from "./types";

const rimsStructure: IFileStructure = [{
    version: 1,
    schema: {
        code: {
            length: 5,
            type: "number"
        },
        width: {
            length: 5,
            type: "number"
        },
        height: {
            length: 1,
            type: "string"
        },
        one_piece: {
            length: 1,
            type: "string"
        },
        diameter: {
            length: 2,
            type: "number"
        },
        material: {
            length: 1,
            type: "string"
        }
    },
    totalLength: 15,
    fileName: "rims.dat"
}];

export {
    rimsStructure
};
