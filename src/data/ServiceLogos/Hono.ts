import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Hono: IBrand = {
  name: "Hono",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Hono/Hono.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
