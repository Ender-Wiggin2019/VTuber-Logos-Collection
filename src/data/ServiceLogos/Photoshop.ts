import { Author, getCredit } from "../credits";

export const Photoshop: IBrand = {
  name: "Photoshop",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Photoshop/Photoshop.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
