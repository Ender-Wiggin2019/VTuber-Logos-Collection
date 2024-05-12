import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Tailwindcss: IBrand = {
  name: "Tailwindcss",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Tailwindcss/Tailwindcss6.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
