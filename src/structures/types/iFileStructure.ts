import {ISchema} from "./iSchema";

type IFileStructure = Array<{
    version: number | string;
    totalLength: number;
    fileName: string;
    schema: ISchema
}>

export {
    IFileStructure
};