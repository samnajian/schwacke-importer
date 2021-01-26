import {camelCaseToSnakeCase} from "./camelCaseToSnakeCase";

describe("camelCaseToSnakeCase", () => {
   it("Should take care of normal case", () => {
       expect(camelCaseToSnakeCase("myNameIsSamNajian")).toEqual("my_name_is_sam_najian");
   });

    it("Should take care of a malformed case", () => {
        expect(camelCaseToSnakeCase("MyNameIsSamNajian")).toEqual("my_name_is_sam_najian");
    });
});