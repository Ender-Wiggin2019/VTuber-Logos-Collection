import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const VisualStudioCode: IBrand = {
  name: "Visual Studio Code",
  aliases: ["vsc", "vscode", "vs code"],
  categories: [BrandCategory.IDE],

  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/VisualStudioCode/VisualStudioCode.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/VisualStudioCode/VisualStudioCodeRound.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "round",
    },
  ],
};
