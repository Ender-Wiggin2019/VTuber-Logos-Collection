import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Rstudio: IBrand = {
  name: "Rstudio",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Rstudio/RStudio.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
