import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Twitter: IBrand = {
  name: "Twitter",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Twitter/Twitter.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
