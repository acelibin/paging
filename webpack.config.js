module.exports = {
    entry: {
        'paging': './index.js'
    },
    output: {
        path: './',
        filename: "[name].js",
        libraryTarget: 'umd',
        library: 'Paging'
    }
}
