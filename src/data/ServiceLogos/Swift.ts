import { Author, getCredit } from "../credits";

export const Swift: IBrand = {
  name: "Swift",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Swift/Swift.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
