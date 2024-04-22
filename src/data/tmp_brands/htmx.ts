import { Author, getCredit } from "../credits";

export const htmx: IBrand = {
    name: 'htmx',
    logos: [
        
        {
            url: '/DownloadedLogos/htmx.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
