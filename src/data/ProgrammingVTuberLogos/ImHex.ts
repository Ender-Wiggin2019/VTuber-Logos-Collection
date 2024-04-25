import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const ImHex: IBrand = {
  name: "ImHex",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGBG.png",
      credit: getCredit(Author.Aikoyori),
      type: "svgbg",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGBGShadows.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ImHex/ImHexLogoSVGFilled.png",
      credit: getCredit(Author.Aikoyori),
      type: "svgfilled",
    },
  ],
};
