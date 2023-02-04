const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"), // the bundle output path
        filename: "bundle.js", // the name of the bundle
        publicPath:'/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    devServer: {
        historyApiFallback: true, // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // .ts and .tsx files
                exclude: /node_modules/, // excluding the node_modules folder
                loader: "ts-loader",
            },
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.js','.jsx','.json'],
    }
};