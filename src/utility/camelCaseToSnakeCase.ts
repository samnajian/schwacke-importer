const camelCaseToSnakeCase = (str: string) => (str.match(/([A-Z])/g) ?? [])
    .reduce((final, current) => final.replace(current, "_" + current.toLowerCase()), str);


export {camelCaseToSnakeCase};