import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const _403Forbidden: IBrand = {
  name: "403 Forbidden",
  aliases: [],
  categories: [BrandCategory.STATUS_CODE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/403Forbidden/Forbidden.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
