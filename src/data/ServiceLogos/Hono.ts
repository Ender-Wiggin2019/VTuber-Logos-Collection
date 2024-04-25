import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Hono: IBrand = {
  name: "Hono",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Hono/Hono.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
