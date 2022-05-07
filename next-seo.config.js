/* will be rendered on every page, except when we override it */

export default {
    title: "Thösam Norlha-Tsang",
    description: "A Personal Website for blog articles - portfolio - coding",
    openGraph: {
        type: 'website',
        // locale: 'en_IE',
        url: 'https://thosam.vercel.app/',
        site_name: 'Thösam Norlha-Tsang',
        images: [
            {
                url: "https://thosam.vercel.app/images/website_thumbnail.png",
                width: 1200,
                height: 630,
            }
        ]  
    },
    twitter: {
        // handle: '@handle',
        // site: '@',
        cardType: 'summary', // summary_large_image
    },
};
