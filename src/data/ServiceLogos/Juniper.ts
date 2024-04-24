import { Author, getCredit } from "../credits";

export const Juniper: IBrand = {
  name: "Juniper",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Juniper/Juniper.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
