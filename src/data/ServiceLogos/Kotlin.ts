import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Kotlin: IBrand = {
  name: "Kotlin",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Kotlin/Kotlin.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
