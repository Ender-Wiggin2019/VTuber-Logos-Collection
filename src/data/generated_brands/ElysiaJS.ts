import { Author, getCredit } from "../credits";

export const ElysiaJS: IBrand = {
    name: 'ElysiaJS',
    logos: [
        
        {
            url: '/ProgrammingVTuberLogos/ElysiaJS/ElysiaJSLogo.png',
            credit: getCredit(Author.Aikoyori),
            type: 'default',
        },
        
        {
            url: '/ProgrammingVTuberLogos/ElysiaJS/ElysiaJSLogoShadowed.png',
            credit: getCredit(Author.Aikoyori),
            type: 'shadow',
        },
        
    ]
}
