import { Author, getCredit } from "../credits";

export const Github: IBrand = {
    name: 'Github',
    logos: [
        
        {
            url: '/DownloadedLogos/Github.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
