const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    return {
        context: path.resolve(__dirname, "src"),

        entry: {
            main: "./main.js"
        },

        resolve: {
            alias:{
                "jQuery": require.resolve("jquery")
            }
        },

        output: {
            filename: "js/[name]-[chunkhash:8].bundle.js",
            path: path.resolve(__dirname, "public"),
            publicPath: "/"
        },

        module: {
            rules: [
                {
                    test: /\.css/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader:"css-loader"
                        }
                    ],
                },
                {
                    test: /\.(eot|woff|woff2|otf|ttf|svg)/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[hash:8].[ext]",
                                outputPath: "fonts",
                                publicPath: "/fonts"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
              template: 'index.html'
            }),
            new webpack.ProvidePlugin({
              $: 'jquery',
              'jQuery': 'jquery'
            }),
            new webpack.DefinePlugin({
              'require.specified': 'require.resolve'
            })
          ]
    };
};
