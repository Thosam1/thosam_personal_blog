/* will be rendered on every page, except when we override it */

const title = "Thösam Norlha-Tsang"
const description = "A Personal Website for blog articles - portfolio - coding"
export default {
    title,
    description,
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://thosam.vercel.app/',
        site_name: 'Thösam Norlha-Tsang',
        title,
        description,
        images: [
            {
                url: 'https://thosam.vercel.app/images/website_thumbnail.png',
                alt: title
            }
        ]  
    },
    twitter: {
        // handle: '@handle',
        // site: '@',
        cardType: 'summary_large_image', // summary_large_image
    },
};
