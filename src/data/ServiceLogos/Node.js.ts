import { Author, getCredit } from "../credits";

export const Nodejs: IBrand = {
  name: "Node.js",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Node.js/Node.js.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
