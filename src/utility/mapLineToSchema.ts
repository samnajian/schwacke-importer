import {Dictionary} from "../types";
import {IFieldDefinition} from "../structures/types";

/**
 * Maps each line of data to schema fields based on the length
 */
const mapLineToSchema = (schema: Dictionary<IFieldDefinition>) => (line: string): Dictionary<string> => {
    const fields = Object.keys(schema),
        lengths = Object.values<IFieldDefinition>(schema);

    return lengths.reduce((mappedLine, {length, type}, index) => {
        /**
         * Calculates the start for each field, start of each field is the sum of all previous fields
         */
        const start = index === 0 ? 0 : lengths.slice(0, index).reduce((sum, {length: current}) => sum + current, 0);

        mappedLine[fields[index]] = line.slice(start, start + length);
        return mappedLine;
    }, {} as Dictionary<string>);
};

export {
    mapLineToSchema
};
