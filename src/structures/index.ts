export * from "./rims";
export * from "./timespans";

import {rimsStructure} from "./rims";
import {timespansStructure} from "./timespans";

const structures = [
    ...rimsStructure, ...timespansStructure
];

export {structures};