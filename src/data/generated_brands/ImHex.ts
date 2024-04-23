import { Author, getCredit } from "../credits";

export const ImHex: IBrand = {
  name: "ImHex",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGFilled.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGBG.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGBGShadows.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
