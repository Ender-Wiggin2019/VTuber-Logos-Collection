import { Author, getCredit } from "../credits";

export const UnityBlender: IBrand = {
  name: "UnityBlender",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/UnityBlender/UnityBlenderT.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
