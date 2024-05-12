import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const RhineLab: IBrand = {
  name: "RhineLab",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/RhineLab/RhineLab.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
