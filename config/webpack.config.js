const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (argv, env) => {
    const mode = process.NODE_ENV && process.NODE_ENV.mode ? process.NODE_ENV.mode : env && env.mode ? env.mode : "development";

    return {

        mode: mode,

        context: path.resolve(__dirname, "../src"),

        stats: {
            colors: true
        },

        entry: {
            main: "./main.js"
        },

        resolve: {
            alias:{
                // We need to alias due to require case sensitivity in the summernote lib
                "jQuery": require.resolve("jquery")
            }
        },

        output: {
            filename: "js/[name]-[chunkhash:8].bundle.js",
            path: path.resolve(__dirname, "../public"),
            publicPath: "/"
        },

        module: {
            rules: [

                // CSS file emitters
                {
                    test: /\.s?css/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader:"css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                },

                {
                    test: /\.less/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader:"css-loader"
                        },
                        {
                            loader: "less-loader"
                        }
                    ],
                },

                // font file emitters
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

            // By default this will remove all files in the output.path directory
            new CleanWebpackPlugin(),

            // Add a content shim for testing and development.
            new HtmlWebpackPlugin({
              template: 'index.html'
            }),

            // Autoimport jquery when used.
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
