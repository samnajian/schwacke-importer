import {rimsStructure, timespansStructure} from "../structures";
import {isLineValid} from "./isLineValid";

describe("isLineValid", () => {
    it("Should work fine for some basic cases", () => {
        expect(isLineValid("000026.00 Jx15S", rimsStructure[0].schema)).toBeTruthy();
        expect(isLineValid("000026.00 Jx15", rimsStructure[0].schema)).toBeFalsy();

        expect(isLineValid("006017651010806801.05.201200.00.0000", timespansStructure[0].schema)).toBeTruthy();
    });
});