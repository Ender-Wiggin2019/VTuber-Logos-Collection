import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const _403Forbidden: IBrand = {
  name: "403 Forbidden",
  aliases: [],
  categories: [BrandCategory.STATUS_CODE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/403Forbidden/Forbidden.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
