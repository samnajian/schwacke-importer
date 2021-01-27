const isNestedArray = <T>(values: Array<T> | Array<Array<T>>): values is Array<Array<T>> => values.length !== values.flat().length;

export {isNestedArray};