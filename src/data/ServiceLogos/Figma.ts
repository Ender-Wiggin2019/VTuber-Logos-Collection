import { Author, getCredit } from "../credits";

export const Figma: IBrand = {
  name: "Figma",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Figma/Figma.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
