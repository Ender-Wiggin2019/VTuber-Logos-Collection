import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Discord: IBrand = {
  name: "Discord",
  aliases: [],
  categories: [BrandCategory.OTHER],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Discord/Discord.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
