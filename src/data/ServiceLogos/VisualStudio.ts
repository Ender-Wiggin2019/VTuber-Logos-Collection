import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const VisualStudio: IBrand = {
  name: "Visual Studio",
  aliases: [],
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/VisualStudio/VisualStudio.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/VisualStudio/VisualStudioRound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "round",
    },
  ],
};
