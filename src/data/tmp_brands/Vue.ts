import { Author, getCredit } from "../credits";

export const Vue: IBrand = {
  name: "Vue",
  logos: [
    {
      url: "/DownloadedLogos/Vue.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
