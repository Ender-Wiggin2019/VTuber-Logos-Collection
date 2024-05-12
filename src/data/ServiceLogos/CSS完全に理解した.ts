import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const CSS: IBrand = {
  name: "CSS完全に理解した",
  aliases: [],
  categories: [BrandCategory.LANGUAGE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/CSS完全に理解した/CSS完全に理解した.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
