import { Author, getCredit } from "../credits";

export const Kubernetes: IBrand = {
    name: 'Kubernetes',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/Kubernetes/kubernetesLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/Kubernetes/kubernetesLogoShadow.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
