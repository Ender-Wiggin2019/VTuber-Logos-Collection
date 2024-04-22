import { FindViaTwitterLogos } from "./brands";
import { ProgrammingVTuberLogos } from "./generated_brands";
import { SAWARATSUKILogos } from "./tmp_brands";

const BRANDS: IBrand[] = [...ProgrammingVTuberLogos, ...FindViaTwitterLogos, ...SAWARATSUKILogos];

BRANDS.sort((a, b) => a.name.localeCompare(b.name));

export { BRANDS };
