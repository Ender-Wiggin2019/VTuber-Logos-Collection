import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Qwikjs: IBrand = {
  name: "Qwik.js",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Qwik.js/Qwik.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
