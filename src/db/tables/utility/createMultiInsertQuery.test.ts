import {createMultiInsertQuery} from "./createMultiInsertQuery";

describe("createMultiInsertQuery", () => {
    it("flat fields", () => {
        expect(createMultiInsertQuery({
            code: 1,
            width: 2
        })).toEqual("VALUES (1, 2)");
    });

    it("multi values fields", () => {
        expect(createMultiInsertQuery({
            code: [1, 3],
            width: [2, 4]
        })).toEqual(`VALUES (1, 2), (3, 4)`);
    });
});