import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Php: IBrand = {
  name: "PHP",
  categories: [BrandCategory.LANGUAGE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/php/default.png",
      credit: getCredit(Author.anwarachilles),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/php/bordered-light.png",
      credit: getCredit(Author.anwarachilles),
      type: "bordered_light",
    },

    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/php/bordered-dark.png",
      credit: getCredit(Author.anwarachilles),
      type: "bordered_dark",
    },
  ],
};
