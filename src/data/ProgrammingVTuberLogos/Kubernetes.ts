import { Author, getCredit } from "../credits";

export const Kubernetes: IBrand = {
  name: "Kubernetes",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Kubernetes/kubernetesLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Kubernetes/kubernetesLogoShadow.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadow",
    },
  ],
};
