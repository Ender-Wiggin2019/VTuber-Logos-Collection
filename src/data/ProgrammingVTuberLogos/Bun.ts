import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Bun: IBrand = {
  name: "Bun",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoOld.png",
      credit: getCredit(Author.Aikoyori),
      type: "old",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Bun/BunLogoShadowedOld.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow old",
    },
  ],
};
