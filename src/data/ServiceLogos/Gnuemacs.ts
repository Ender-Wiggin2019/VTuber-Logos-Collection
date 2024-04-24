import { Author, getCredit } from "../credits";

export const Gnuemacs: IBrand = {
  name: "Gnuemacs",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Gnuemacs/GNUEmacs.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
