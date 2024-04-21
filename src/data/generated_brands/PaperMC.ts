import { Author, getCredit } from "../credits";

export const PaperMC: IBrand = {
    name: 'PaperMC',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/PaperMC/PaperMCLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/PaperMC/PaperMCLogoShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
