import {camelCaseToSnakeCase} from "../utility";
const mapObjectToSQLPairs = (obj: { [key: string]: string | Date | number }) => Object.entries(obj)
    .map(pair => `${camelCaseToSnakeCase(pair[0])}='${pair[1].toString()}'`).join(" ");

export {mapObjectToSQLPairs};