import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Juniper: IBrand = {
  name: "Juniper",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Juniper/Juniper.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
