import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const VercelAISDK: IBrand = {
  name: "VercelAISDK",
  aliases: [],
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/VercelAISDK/AISDK.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
