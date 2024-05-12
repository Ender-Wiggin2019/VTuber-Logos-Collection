import { ICredit } from "./type";

export enum Author {
  Aikoyori,
  AisuAsai,
  SAWARATSUKI,
  ENSO,
  hvpexe,
  FurkanKarabudak,
  mkpoli,
  AlexB,
}
export const CREDITS: { [key in Author]: ICredit } = {
  [Author.Aikoyori]: {
    author: "Aikoyori",
    pk: "Aikoyori",
    twitter: "https://twitter.com/Aikoyori",
    github: "https://github.com/Aikoyori",
    license: {
      url: "https://github.com/Aikoyori/ProgrammingVTuberLogos/blob/main/LICENSE.md",
      name: "CC BY-NC-SA 4.0",
    },
  },
  [Author.AisuAsai]: {
    author: "Aisu Asai",
    pk: "aisu-asai",
    twitter: "https://twitter.com/AisuAsai",
  },
  [Author.SAWARATSUKI]: {
    author: "SAWARATSUKI",
    pk: "sawaratsuki",
    twitter: "https://twitter.com/sawaratsuki1004",
    github: "https://github.com/SAWARATSUKI",
    license: {
      url: "https://github.com/SAWARATSUKI/KawaiiLogos",
      name: "SAWARATSUKI's license",
      description:
        "SAWARATSUKI create a new repository for KawaiiLogos. The full list of logos is available in the repository. The logos not in this repository is temporary following license CC BY 4.0.",
    },
  },
  [Author.ENSO]: {
    author: "ENSO",
    pk: "enso",
    twitter: "https://twitter.com/Enso_exe",
  },
  [Author.hvpexe]: {
    author: "『Zenith』",
    pk: "hvpexe",
    github: "https://github.com/hvpexe",
  },
  [Author.FurkanKarabudak]: {
    author: "FurkanKarabudak",
    pk: "_FrkanKrabudak_",
    twitter: "https://twitter.com/_FrkanKrabudak_",
  },
  [Author.AlexB]: {
    author: "AlexB",
    pk: "Alex_with_a_B",
    twitter: "https://twitter.com/Alex_with_a_B",
    github: "https://github.com/xelab04",
  },
  [Author.mkpoli]: {
    author: "mkpoli",
    pk: "mkpoli",
    twitter: "https://twitter.com/mkpoli/status/1781931713939288337/photo/1'",
    github: "https://github.com/mkpoli",
  },
};

export function getCredit(author: Author): ICredit {
  return CREDITS[author];
}
