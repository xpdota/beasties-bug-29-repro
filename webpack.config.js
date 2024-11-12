const BeastiesWebpackPlugin = require("beasties-webpack-plugin");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = (env, argv) => {
    return {
        entry: [path.resolve(__dirname, 'src/main.js')],
        output: {
            path: path.resolve(__dirname, "./dist"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src/index.html"),
                filename: "index.html",
                inject: false,
            }),
            new BeastiesWebpackPlugin({
                path: './dist/',
                publicPath: '',
                includeSelectors: ['div.foo']
            })
        ]
    }
}