import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const VercelAISDK: IBrand = {
  name: "VercelAISDK",
  aliases: [],
  categories: [BrandCategory.FRAMEWORK],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/VercelAISDK/AISDK.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
