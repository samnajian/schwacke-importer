import {mapObjectToSQLPairs} from "./mapObjectToSQLPairs";

it("MapObjectToSQLPairs", () => {
    const now  = Date.now();
    expect(mapObjectToSQLPairs({name: "Sam", fName: "Najian", d: now.toString()}))
        .toEqual(`name='Sam' f_name='Najian' d='${now.toString()}'`);
});