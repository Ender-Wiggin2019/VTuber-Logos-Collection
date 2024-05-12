import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Rider: IBrand = {
  name: "Rider",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Rider/Rider.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
