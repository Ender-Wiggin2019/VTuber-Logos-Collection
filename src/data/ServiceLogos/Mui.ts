import { Author, getCredit } from "../credits";

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
