import { Author, getCredit } from "../credits";

export const Ubuntu: IBrand = {
  name: "Ubuntu",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Ubuntu/Ubuntu.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
