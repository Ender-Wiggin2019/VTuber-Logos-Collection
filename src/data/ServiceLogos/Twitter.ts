import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Twitter: IBrand = {
  name: "Twitter",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Twitter/Twitter.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
