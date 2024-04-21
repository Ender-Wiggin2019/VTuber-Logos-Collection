import { Author, getCredit } from "../credits";

export const IntelliJIDEA: IBrand = {
    name: 'IntelliJIDEA',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/IntelliJIDEA/IntellijLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/IntelliJIDEA/intelliJShadow.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
