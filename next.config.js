module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/blog/test": { page: "/blog" , query : {slug : "test"}},
        //    "/about": { page: "/about" },
        }
    },
};