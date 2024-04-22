import { Author, getCredit } from "../credits";

export const AngularNewLogo: IBrand = {
    name: 'AngularNewLogo',
    logos: [
        
        {
            url: '/DownloadedLogos/AngularNewLogo.png',
            credit: getCredit(Author.SAWARATSUKI),
            type: 'default',
        },
        
    ]
}
