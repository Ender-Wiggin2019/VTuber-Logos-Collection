import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const NestJS: IBrand = {
  name: "NestJS",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/nestjs/default.png",
      credit: getCredit(Author.anwarachilles),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/nestjs/shadowed.png",
      credit: getCredit(Author.anwarachilles),
      type: "shadowed",
    },
  ],
};
