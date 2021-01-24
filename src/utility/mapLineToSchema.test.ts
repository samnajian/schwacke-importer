import {mapLineToSchema} from "./mapLineToSchema";
import {rimsStructure, timespansStructure} from "../structures";

describe("mapeLineToSchema", () => {
    it("Works correctly for a single valid line (rims) ", () => {
        const line = "000026.00 Jx15S";
        expect(mapLineToSchema(rimsStructure[0].schema)(line)).toEqual({
            code: "00002",
            width: "6.00 ",
            height: "J",
            one_piece: "x",
            diameter: "15",
            material: "S"
        });
    });

    it("Works correctly for a single valid line (timespans) ", () => {
        const line = "006017651010806801.05.201200.00.0000";
        expect(mapLineToSchema(timespansStructure[0].schema)(line)).toEqual({
            id: "00601765",
            schwacke_code: "10108068",
            valid_from: "01.05.2012",
            valid_to: "00.00.0000",
        });
    });

});
