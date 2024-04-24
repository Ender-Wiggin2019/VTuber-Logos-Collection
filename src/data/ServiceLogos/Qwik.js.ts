import { Author, getCredit } from "../credits";

export const Qwikjs: IBrand = {
  name: "Qwik.js",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Qwik.js/Qwik.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
