import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Clion: IBrand = {
  name: "Clion",
  aliases: ["JetBrains", "jb"],
  categories: [BrandCategory.IDE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Clion/Clion.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
