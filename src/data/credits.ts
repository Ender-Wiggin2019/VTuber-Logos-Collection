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
  murimurikyu,
  syke9p3,
  G2_Games,
  C29H25N3O5,
  Shiroame_Kusu,
  anwarachilles,
  NatchaLatteOfficial
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
    twitter: "https://twitter.com/mkpoli/status/1781931713939288337/photo/1",
    github: "https://github.com/mkpoli",
  },
  [Author.murimurikyu]: {
    author: "murimurikyu",
    pk: "murimurikyu",
    twitter: "https://twitter.com/tsuki_setsuna",
    github: "https://github.com/murimurikyu/CuteVtubingThing",
  },
  [Author.syke9p3]: {
    author: "syke9p3",
    pk: "syke9p3",
    github: "https://github.com/syke9p3",
    license: {
      url: "https://github.com/syke9p3/Syke-VTuber-Icons/blob/main/LICENSE.md",
      name: "CC BY-NC-SA 4.0",
    },
  },
  [Author.G2_Games]: {
    author: "G2 Games",
    pk: "g2-games",
    website: "https://g2games.dev/",
    github: "https://github.com/g2-games",
    license: {
      url: "https://github.com/G2-Games/fun-logos/blob/main/LICENSE",
      name: "CC BY-NC-SA 4.0",
    },
  },
  [Author.C29H25N3O5]: {
    author: "C₂₉H₂₅N₃O₅",
    pk: "C29H25N3O5",
    website: "https://www.threads.net/@c29h25n3o5",
    github: "https://github.com/C29H25N3O5",
    license: {
      url: "https://raw.githubusercontent.com/26F-Studio/cute-logos/main/LICENCE",
      name: "CC BY-NC-SA 4.0",
    },
  },[Author.Shiroame_Kusu]: {
    author: "Shiroame Kusu",
    pk: "Shiroame_Kusu",
    github: "https://github.com/Shiroiame-Kusu",
    license: {
      url: "https://raw.githubusercontent.com/Shiroiame-Kusu/ProgrammingVTuberLogos-Windows/main/LICENSE",
      name: "CC BY-NC-SA 4.0",
    },
  },
  [Author.anwarachilles]: {
    author: "Anwar Achilles",
    pk: "anwarachilles",
    github: "https://github.com/anwarachilles",
    license: {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/LICENSE",
      name: "CC BY-NC-SA 4.0",
    },
  },
  [Author.NatchaLatteOfficial]: {
    author: "NatchaLatte Official",
    pk: "NatchaLatteOfficial",
    website: "https://natchalatte-official.carrd.co/",
    twitter: "https://x.com/NatchaLatteDev",
    github: "https://github.com/NatchaLatte",
  },
};

export function getCredit(author: Author): ICredit {
  return CREDITS[author];
}
