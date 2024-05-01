import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const NullPointerException: IBrand = {
  name: "NullPointerException",
  aliases: [],
  categories: [BrandCategory.OTHER],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/NullPointerException/NullPointerException.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
