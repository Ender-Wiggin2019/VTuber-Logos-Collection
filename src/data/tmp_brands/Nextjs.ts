import { Author, getCredit } from "../credits";

export const Nextjs: IBrand = {
  name: "Next.js",
  logos: [
    {
      url: "/DownloadedLogos/Next.js.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
