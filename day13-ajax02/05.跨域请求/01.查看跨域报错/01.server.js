const express = require("express");
const path = require("path");
const app = express();

//书写一个处理post请求的中间件，把post请求的报文体处理成一个对象，并放在req.body上
app.use("", express.urlencoded({ //这个是处理form表单格式的报文体的
    extended: false
}))
app.use("", express.json()) //处理json格式的报文体的

app.get("/login", (req, res) => {
    const {
        user,
        pass
    } = req.query;
    console.log(user, pass, req.query);

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