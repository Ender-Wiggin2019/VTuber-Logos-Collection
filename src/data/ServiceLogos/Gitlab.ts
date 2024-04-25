import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Gitlab: IBrand = {
  name: "Gitlab",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Gitlab/Gitlab.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
