import { Author, getCredit } from "../credits";

export const ArchLinux: IBrand = {
  name: "Arch Linux",
  logos: [
    {
      url: "/DownloadedLogos/Arch Linux.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
