import { Author, getCredit } from "../credits";

export const Cloudflare: IBrand = {
  name: "Cloudflare",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Cloudflare/Cloudflare.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
