import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const ElysiaJS: IBrand = {
  name: "ElysiaJS",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ElysiaJS/ElysiaJSLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/ElysiaJS/ElysiaJSLogoShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },
  ],
};
