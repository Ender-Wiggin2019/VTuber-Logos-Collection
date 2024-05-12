import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const _404Notfound: IBrand = {
  name: "404Notfound",
  aliases: [],
  categories: [BrandCategory.STATUS_CODE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/404Notfound/NotFound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
