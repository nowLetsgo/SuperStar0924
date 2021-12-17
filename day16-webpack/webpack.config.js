const path = require("path");
module.exports = {
    //entry:入口文件配置
    entry: "./src/index.js",


    //output:输出位置的配置
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },

    //loader:加载器，loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。
    module: {
        // rules: [{}, {}, {}, {}]
    },

    //plugin:插件：loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
    // plugin: [],

    // mode:打包模式:development / production
    mode: "production"
}