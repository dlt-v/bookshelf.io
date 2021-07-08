module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/_shared.scss";'
            }
        }
    },
    devServer: {
        proxy: {
            "^/api": {
                target: "https://www.googleapis.com/books/v1",
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: { "^/api": "/" }
            }
        }
    }
};