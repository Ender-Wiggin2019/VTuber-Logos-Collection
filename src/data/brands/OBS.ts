import { Author, getCredit } from "../credits";

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
