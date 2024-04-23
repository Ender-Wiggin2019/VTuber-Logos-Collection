import { Author, getCredit } from "../credits";

export const RaspberryPi: IBrand = {
  name: "Raspberry Pi",
  logos: [
    {
      url: "/DownloadedLogos/Raspberry Pi.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
