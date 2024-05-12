import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const NullPointerException: IBrand = {
  name: "NullPointerException",
  aliases: [],
  categories: [BrandCategory.OTHER],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/NullPointerException/NullPointerException.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
