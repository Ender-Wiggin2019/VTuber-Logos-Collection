import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Vrchat: IBrand = {
  name: "Vrchat",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Vrchat/VRChat.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
