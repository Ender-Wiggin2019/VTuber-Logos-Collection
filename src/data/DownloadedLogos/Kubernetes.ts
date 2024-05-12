import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Kubernetes: IBrand = {
  name: "Kubernetes",
  aliases: ["k8s"],
  logos: [
    {
      url: "/DownloadedLogos/Kubernetes/Kubernetes.png",
      credit: getCredit(Author.AlexB),
      type: "default",
    },
  ],
};
