import {IFieldDefinition} from "./iFieldDefinition";
import {Dictionary} from "../../types";

type IFileStructure = Array<{
    version: number | string;
    totalLength: number;
    fileName: string;
    schema: Dictionary<IFieldDefinition>
}>

export {
    IFileStructure
};