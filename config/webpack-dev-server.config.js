const path = require("path");

module.exports = () => {
    return {
        devServer: {
            contentBase: path.join(__dirname, '../public'),
            compress: true,
            port: 8088,
            hot: true,
            index: "index.html",
            overlay: true,
            open: true
        }
    };
}