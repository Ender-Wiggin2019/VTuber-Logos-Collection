import { Author, getCredit } from "../credits";

export const Go: IBrand = {
  name: "Go",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Go/Golang.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
