import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Mui: IBrand = {
  name: "Mui",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Mui/Mui.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
