import { CuteLogos } from "./CuteLogos";
import { CuteVtubingThing } from "./CuteVtubingThing";
import { DownloadedLogos } from "./DownloadedLogos";
import { ProgrammingVTuberLogos } from "./ProgrammingVTuberLogos";
import { ProgrammingVTuberLogos_Windows } from "./ProgrammingVTuberLogos_Windows";
import { ServiceLogos } from "./ServiceLogos";
import { VTuberLogos } from "./VtuberLogos";
import { FindViaTwitterLogos } from "./brands";
import { FunLogos } from "./FunLogos";
import { IBrand } from "./type";

const BRANDS: IBrand[] = [...CuteLogos, ...ProgrammingVTuberLogos, ...FindViaTwitterLogos, ...ServiceLogos, ...DownloadedLogos, ...CuteVtubingThing, ...VTuberLogos, ...FunLogos, ...ProgrammingVTuberLogos_Windows];

BRANDS.sort((a, b) => a.name.localeCompare(b.name));

export { BRANDS };
