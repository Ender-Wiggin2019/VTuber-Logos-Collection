import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const VisualStudio: IBrand = {
  name: "Visual Studio",
  aliases: [],
  categories: [BrandCategory.IDE],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VisualStudio/VisualStudio.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VisualStudio/VisualStudioRound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "round",
    },
  ],
};
