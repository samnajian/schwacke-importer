/**
 * Simplistically validates lines
 * @Todo: add more cases
 */
import {ISchema} from "../structures/types";
import {getTotalLineLength} from "./getTotalLineLength";

const isLineValid = (line: string, schema: ISchema) => {

    if (line.length !== getTotalLineLength(schema)) {
        return false;
    }

    return true;
};

export {isLineValid};