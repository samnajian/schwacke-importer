const camelCaseToSnakeCase = (str: string) => {
    const ensuredLowerCaseInitial = `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
    return (ensuredLowerCaseInitial.match(/([A-Z])/g) ?? [])
        .reduce((final, current) => final.replace(current, "_" + current.toLowerCase()), ensuredLowerCaseInitial);
};


export {camelCaseToSnakeCase};