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
        pass,
        callback
    } = req.query;
    console.log(user, pass, callback);
    // console.log(req);
    //查看请求的地址origin
    const origin = req.headers.origin;

    //设置允许跨域请求的地址
    // res.set("Access-Control-Allow-Origin", 'http://127.0.0.1:5500')
    // res.set("Access-Control-Allow-Origin", '*')

    //设置多个允许
    const arr = ['http://127.0.0.1:3300', 'http://127.0.0.1:4400', 'http://127.0.0.1:5500', 'http://127.0.0.1:5500', 'http://127.0.0.1:6600']
    //判断当前的origin是否在我允许的数组中
    if (arr.includes(origin)) {
        res.set("Access-Control-Allow-Origin", origin)
    }

    if (user === "laoli" && pass === '123456') {
        return res.send({
            code: 10000,
            msg: "登录成功"
        })
    }

    res.send({
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