import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const RhineLab: IBrand = {
  name: "RhineLab",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/RhineLab/RhineLab.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
