import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Haskell: IBrand = {
  name: "Haskell",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Haskell/Haskell.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Haskell/Haskell $.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: " $",
    },
  ],
};
