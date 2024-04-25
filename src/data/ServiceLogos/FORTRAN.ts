import { Author, getCredit } from "../credits";

export const FORTRAN: IBrand = {
  name: "FORTRAN",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/FORTRAN/FORTRAN.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
