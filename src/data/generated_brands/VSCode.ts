import { Author, getCredit } from "../credits";

export const VSCode: IBrand = {
    name: 'VSCode',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/VSCode/VSCode.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/VSCode/VSCode-Thick.png',
            credit: getCredit(Author.Aikoyori),
            type: 'thick',
        },
        
    ]
}
