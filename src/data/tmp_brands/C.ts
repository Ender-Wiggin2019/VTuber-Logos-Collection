import { Author, getCredit } from "../credits";

export const C: IBrand = {
    name: 'C',
    logos: [
        
        {
            url: '/DownloadedLogos/C.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
