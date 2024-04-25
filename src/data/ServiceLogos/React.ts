import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const React: IBrand = {
  name: "React",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/React/React.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
