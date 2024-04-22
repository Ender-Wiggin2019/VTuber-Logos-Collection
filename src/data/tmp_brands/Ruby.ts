import { Author, getCredit } from "../credits";

export const Ruby: IBrand = {
    name: 'Ruby',
    logos: [
        
        {
            url: '/DownloadedLogos/Ruby.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
