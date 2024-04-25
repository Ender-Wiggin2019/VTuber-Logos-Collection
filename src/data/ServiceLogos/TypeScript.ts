import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const TypeScript: IBrand = {
  name: "TypeScript",
  aliases: ["ts"],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/TypeScript/TypeScript.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
