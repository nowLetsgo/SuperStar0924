const express = require("express");
const path = require("path");
//连接数据库模块
require("./db")
//引入数据库的用户集合
const userModel = require("./models/userModel");
const app = express();


//使用express的静态文件中间件，把静态文件暴露出去
app.use(express.static(path.resolve(__dirname, "./views")))
app.use('/public', express.static(path.resolve(__dirname, "./public")))

//引入子模块的router
const registerRouter = require("./route/register");

//把子模块的router挂载在app上
app.use(registerRouter);

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功，请访问 http://192.168.17.62:3000");
})