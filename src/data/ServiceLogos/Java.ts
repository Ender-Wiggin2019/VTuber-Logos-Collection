import { Author, getCredit } from "../credits";

export const Java: IBrand = {
  name: "Java",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Java/Java.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
