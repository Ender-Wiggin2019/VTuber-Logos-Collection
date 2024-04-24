import { Author, getCredit } from "../credits";

export const Vue: IBrand = {
  name: "Vue",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Vue/Vue.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
