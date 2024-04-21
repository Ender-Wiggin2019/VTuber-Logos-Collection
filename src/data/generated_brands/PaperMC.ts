import { Author, getCredit } from "../credits";

export const PaperMC: IBrand = {
    name: 'PaperMC',
    logos: [
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/PaperMC/PaperMCLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: 'https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/PaperMC/PaperMCLogoShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
