const siteUrl = "https://thosam.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
      policies: [
          { userAgent: "*", disallow: "/secret" },
          { userAgent: "*", allow: "/" }, // rest of website 
      ],
      additionalSitemaps: [`${siteUrl}/sitemap-0.xml`] // no idea if this line works xD
  },
  exclude: ["/secret*"], // excluding pages we don't want google indexing, private, etc...
};
