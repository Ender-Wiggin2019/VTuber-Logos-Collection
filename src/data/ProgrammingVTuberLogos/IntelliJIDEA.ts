import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const IntelliJIDEA: IBrand = {
  name: "IntelliJ IDEA",
  aliases: ["JetBrains", "jb"],
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/IntelliJIDEA/IntellijLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/IntelliJIDEA/intelliJShadow.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
