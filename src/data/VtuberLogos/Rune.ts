import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Rune: IBrand = {
  name: "Rune",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/rune/default.png",
      credit: getCredit(Author.anwarachilles),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/rune/shadowed.png",
      credit: getCredit(Author.anwarachilles),
      type: "shadowed",
    },
  ],
};
