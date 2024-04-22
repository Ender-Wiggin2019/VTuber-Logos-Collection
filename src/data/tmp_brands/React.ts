import { Author, getCredit } from "../credits";

export const React: IBrand = {
  name: "React",
  logos: [
    {
      url: "/DownloadedLogos/React.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
