import { Author, getCredit } from "../credits";

export const VIMTRANS: IBrand = {
  name: "VIMTRANS",
  logos: [
    {
      url: "/DownloadedLogos/VIMTRANS.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
