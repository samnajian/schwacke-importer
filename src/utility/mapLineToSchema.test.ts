import { mapLineToSchema } from "./mapLineToSchema";
import { rimsStructure } from "../structures";
import {timespansStructure} from "../structures/timespans";

describe("mapeLineToSchema", () => {
    it("Works correctly for a single valid line (rims) ", () => {
        const line = "000026.00 Jx15S";
        expect(mapLineToSchema(line, rimsStructure.v1.schema)).toEqual({
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
        expect(mapLineToSchema(line, timespansStructure.v1.schema)).toEqual({
            id: "00601765",
            schwacke_code: "10108068",
            valid_from: "01.05.2012",
            valid_to: "00.00.0000",
        });
    });

});
