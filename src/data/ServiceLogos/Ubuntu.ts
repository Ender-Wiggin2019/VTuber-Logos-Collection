import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Ubuntu: IBrand = {
  name: "Ubuntu",
  aliases: ["linux"],
  categories: [BrandCategory.OS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Ubuntu/Ubuntu.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
