import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GitLab: IBrand = {
  name: "Gitlab",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/GitLab/GitLab.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
