import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Vim: IBrand = {
  name: "Vim",
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Vim/VIM.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
