import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Flutter: IBrand = {
  name: "Flutter",
  categories: [BrandCategory.FRAMEWORK],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Flutter/FlutterTransparent.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
