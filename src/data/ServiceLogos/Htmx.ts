import { Author, getCredit } from "../credits";

export const Htmx: IBrand = {
  name: "Htmx",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Htmx/htmx.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
