import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Vite: IBrand = {
  name: "Vite",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Vite/Vite.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
