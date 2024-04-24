import { Author, getCredit } from "../credits";

export const CCC: IBrand = {
  name: "C,C#,C++",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/C%2CC%23%2CC%2B%2B/All.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
