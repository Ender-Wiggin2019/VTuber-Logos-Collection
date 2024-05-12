import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const VisualStudioCode: IBrand = {
  name: "Visual Studio Code",
  aliases: ["vsc", "vscode", "vs code"],
  categories: [BrandCategory.IDE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VisualStudioCode/VisualStudioCode.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VisualStudioCode/VisualStudioCodeRound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "round",
    },
  ],
};
