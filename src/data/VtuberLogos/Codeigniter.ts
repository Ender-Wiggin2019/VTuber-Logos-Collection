import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const CodeIgniter: IBrand = {
  name: "CodeIgniter",
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/codeigniter/default.png",
      credit: getCredit(Author.anwarachilles),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/AnwarAchilles/VTuber-Style-Logos/main/codeigniter/shadowed.png",
      credit: getCredit(Author.anwarachilles),
      type: "shadowed",
    },
  ],
};
