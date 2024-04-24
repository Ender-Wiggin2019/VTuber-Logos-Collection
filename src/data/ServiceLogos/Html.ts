import { Author, getCredit } from "../credits";

export const Html: IBrand = {
  name: "Html",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Html/HTML.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
