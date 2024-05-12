import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const _418Imateapot: IBrand = {
  name: "418 I'm a teapot",
  aliases: [],
  categories: [BrandCategory.STATUS_CODE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/418I'mateapot/418I'mateapot.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
