import { Author, getCredit } from "../credits";

export const Python: IBrand = {
  name: "Python",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Python/Python.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
