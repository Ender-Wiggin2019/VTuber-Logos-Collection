import { Author, getCredit } from "../credits";

export const Nextjs: IBrand = {
  name: "Next.js",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Next.js/Next.js.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
