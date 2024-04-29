import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const CSS: IBrand = {
  name: "CSS完全に理解した",
  aliases: [],
  categories: [BrandCategory.LANGUAGE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/CSS完全に理解した/CSS完全に理解した.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
