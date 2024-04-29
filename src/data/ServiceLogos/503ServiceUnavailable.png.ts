import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const _503ServiceUnavailablepng: IBrand = {
  name: "503 Service Unavailable",
  aliases: [],
  categories: [BrandCategory.STATUS_CODE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/503ServiceUnavailable.png/ServiceUnavailable.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
