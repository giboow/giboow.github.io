const sitemap = require("nextjs-sitemap-generator");

sitemap({
    baseUrl: "https://giboow.fr",
    ignoredPaths: [],
    extraPaths: [],
    pagesDirectory: __dirname + "/out",
    targetDirectory: "out/",
    sitemapFilename: "sitemap.xml",
    nextConfigPath: __dirname + "/next.config.js",
    ignoredExtensions: ["png", "jpg", "css", "md", "ico", "webp", "xml"],
    pagesConfig: {
        // "/login": {
        //     priority: "0.5",
        //     changefreq: "daily",
        // },
    },
    sitemapStylesheet: [
        {
            type: "text/xsl",
            styleFile: "sitemap.xsl",
        },
    ],
});

console.log(`✅ sitemap.xml generated!`);
