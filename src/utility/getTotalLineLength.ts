import {ISchema} from "../structures/types";
import {Dictionary} from "../types";

const calculateTotalLineLength = (schema: ISchema): number => Object.values(schema)
    .map(field => field.length)
    .reduce((sum, length) => sum + length, 0);

const cache: Dictionary<number> = {};

/**
 * Memoized calculation since this function is called once per line
 */
const getTotalLineLength = (schema: ISchema): number => {
    const key = Object.keys(schema).join("-");

    if (cache[key] !== undefined) {
        return cache[key];
    }

    cache[key] = calculateTotalLineLength(schema);
    return cache[key];
};
export {getTotalLineLength};