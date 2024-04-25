import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const OBS: IBrand = {
  name: "OBS",
  logos: [
    {
      url: "/FindViaTwitterLogos/OBS/OBS.png",
      credit: getCredit(Author.ENSO),
      type: "default",
    },
  ],
};
