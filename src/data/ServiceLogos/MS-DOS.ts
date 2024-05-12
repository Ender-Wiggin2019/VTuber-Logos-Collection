import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const MSDOS: IBrand = {
  name: "MS DOS",
  aliases: [],
  categories: [BrandCategory.OS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/MS-DOS/MS-DOS.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
