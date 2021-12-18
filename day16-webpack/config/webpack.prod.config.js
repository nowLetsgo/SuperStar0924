const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    //entry:入口文件配置
    entry: "./src/index.js",


    //output:输出位置的配置
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "./js/main.js"
    },

    //loader:加载器，loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
    module: {
        rules: [{
            test: /\.css$/i,
            //loader的加载也是顺序的，从后向前依次加载
            //css-loader的作用：把css转为js，放到入口文件中
            //style-loader的作用：把js中的css 生成一个style标签插入进去
            // use: ["style-loader", "css-loader"]

            //单独把css提取出一个独立的文件
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        }, {
            test: /\.less$/i,
            //less-loader：是把less转为css(请安装less)
            // use: ["style-loader", "css-loader", "less-loader"]

            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"]
        }, {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: "usage", //按需加载
                                corejs: 3, //corejs是按需加载的配置文件，3是版本号
                                targets: "defaults"
                            },
                        ]
                    ]
                }
            }
        }, {
            test: /\.(png|jpg|gif|svg|ico)$/,
            type: "asset",
            parser: {
                dataUrlCondition: {
                    maxSize: 15 * 1024, // 小于15kb以下的图片会被打包成base64格式
                },
            },
            generator: {
                filename: 'img/[name][ext]'
            }
        }, {
            test: /\.html$/i,
            use: {
                loader: 'html-loader'
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'font/[name][ext]'
            }
        }]
    },

    //压缩css配置
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },

    //plugin:插件：loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
    plugins: [new MiniCssExtractPlugin({
        filename: "./css/[name].css"
    }), new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        minify: {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
    }), new ESLintPlugin({
        fix: true
    }), new CopyWebpackPlugin({
        patterns: [{
            from: "./src/public",
            to: "public"
        }]
    }), new CleanWebpackPlugin()],

    // mode:打包模式:development / production
    mode: "production"
}