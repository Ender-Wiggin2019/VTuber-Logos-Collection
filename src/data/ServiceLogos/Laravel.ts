import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Laravel: IBrand = {
  name: "Laravel",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Laravel/Laravel.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
