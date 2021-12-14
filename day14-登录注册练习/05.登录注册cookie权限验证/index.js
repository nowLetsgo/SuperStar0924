const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
//连接数据库模块
require("./db")

const app = express();

//把cookie-parser中间件挂载在app上
app.use(cookieParser());

//使用处理post请求数据的中间件
app.use(express.urlencoded());
app.use(express.json());

//使用express的静态文件中间件，把静态文件暴露出去
app.use(express.static(path.resolve(__dirname, "./views")))
app.use('/public', express.static(path.resolve(__dirname, "./public")))

//引入子模块的router
const registerRouter = require("./route/register");
const loginRouter = require("./route/login");
const regRouter = require("./route/reg");
const centerRouter = require("./route/center");

//把子模块的router挂载在app上
app.use(regRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(centerRouter);

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功，请访问 http://192.168.17.62:3000");
})