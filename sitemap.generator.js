const sitemap = require("nextjs-sitemap-generator");

sitemap({
    baseUrl: "https://giboow.fr",
    ignoredPaths: [],
    extraPaths: [],
    pagesDirectory: __dirname + "/pages",
    targetDirectory: "out/",
    sitemapFilename: "sitemap.xml",
    nextConfigPath: __dirname + "/next.config.js",
    ignoredExtensions: ["png", "jpg"],
    pagesConfig: {
        // "/login": {
        //     priority: "0.5",
        //     changefreq: "daily",
        // },
    },
    sitemapStylesheet: [
        {
            type: "text/css",
            styleFile: "/test/styles.css",
        },
        {
            type: "text/xsl",
            styleFile: "test/test/styles.xls",
        },
    ],
});

console.log(`✅ sitemap.xml generated!`);