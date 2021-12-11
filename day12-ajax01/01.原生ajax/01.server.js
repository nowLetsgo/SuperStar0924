const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "01.get请求.html")
    res.sendFile(filePath)
})
/* 
    登录get请求数据的接口文档
        - 请求地址：/login
        - 请求方式：get
        - 参数：
            - user:用户名
            - pass：密码
        - 响应(json对象类型)
            - code:当前处理的状态码 10000代表登录成功  100001代表密码或者账号错误
            - msg:结果字符串
*/

app.get("/login", (req, res) => {
    const {
        user,
        pass
    } = req.query;
    console.log(user, pass);

    if (user === "laoli" && pass === "123456") {
        return res.json({
            code: 10000,
            msg: "登录成功"
        })
    }

    res.json({
        code: 10001,
        msg: "登录失败"
    })
})

app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功， http://192.168.17.62:3000");
})