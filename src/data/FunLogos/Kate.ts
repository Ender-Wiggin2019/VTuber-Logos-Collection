import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Kate: IBrand = {
  name: "Kate - KDE Advanced Text Editor",
  aliases: ["kde", "kde advanced text editor"],
  categories: [BrandCategory.IDE],

  logos: [
    {
      url: "/fun-logos/kate/kate.svg",
      credit: getCredit(Author.G2_Games),
      type: "default",
    },
    {
      url: "/fun-logos/kate/kate-animated.svg",
      credit: getCredit(Author.G2_Games),
      type: "animated",
    },
  ],
};
