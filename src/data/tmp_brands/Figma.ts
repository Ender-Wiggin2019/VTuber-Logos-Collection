import { Author, getCredit } from "../credits";

export const Figma: IBrand = {
    name: 'Figma',
    logos: [
        
        {
            url: '/DownloadedLogos/Figma.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
