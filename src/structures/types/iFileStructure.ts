import {ISchema} from "./iSchema";
import {Dictionary} from "../../types";

type IFileStructure = Array<{
    version: number | string;
    totalLength: number;
    fileName: string;
    tableName: string;
    getInsertQuery: (values: Dictionary<number | string | Date | Array<number | string | Date>>) => string;
    schema: ISchema
}>

export {
    IFileStructure
};