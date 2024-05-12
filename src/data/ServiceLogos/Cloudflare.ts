import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Cloudflare: IBrand = {
  name: "Cloudflare",
  categories: [BrandCategory.INFRA],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Cloudflare/Cloudflare.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
