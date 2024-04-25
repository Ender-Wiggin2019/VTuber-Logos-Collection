import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const ElysiaJS: IBrand = {
  name: "ElysiaJS",
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
