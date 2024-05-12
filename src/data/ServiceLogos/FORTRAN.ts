import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const FORTRAN: IBrand = {
  name: "FORTRAN",
  categories: [BrandCategory.LANGUAGE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/FORTRAN/FORTRAN.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
