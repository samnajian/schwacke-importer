import {Dictionary} from "../../../types";
import {isNestedArray} from "../../../utility";

const createMultiInsertQuery = <T = string | number | Date>(fields: Dictionary<T | Array<T>>) => {
    const values = Object.values<T | Array<T>>(fields);

    if (isNestedArray(values)) {
        const transposedValues = values[0].map((v, i) => values.map((rowItems: Array<T>) => rowItems[i]));
        return `VALUES (${transposedValues.map(items => items.join(", ")).join("), (")})`;
    }

    return `VALUES (${values.join(", ")})`;

};

export {createMultiInsertQuery};