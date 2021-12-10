//1.引入express包
const express = require("express");
const path = require("path")

//2.引入的express是一个函数，需要调用express函数，才能得到一个应用对象app,所有搭建服务的方法属性都是app对象上
const app = express();

//3.书写一个get请求接口,用来接收请求，get方法的第二个参数是一个回调函数，回调函数有两个参数分别是req,res
app.get("/", (req, res) => {
    //1.最基础的响应end方法，需要我们手动设置content-type
    /* res.setHeader("Content-type", "text/plain;charset=utf-8")
    res.end("哼!!") */

    //2.send方法 自动添加响应头(常用，但是正常我们还是建议书写content-type设置)
    /* // res.send("哼！")
    res.send({
        code: 10000,
        msg: 'ok'
    }) */

    //3.json方法 直接响应一个json出去
    /* res.json({
        code: 10000,
        msg: 'ok'
    }) */

    //4.sendFile()响应一个文件出去
    /* const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath) */

    //5.download 响应一个下载
    /* const filePath = path.resolve(__dirname, "01.mp4");
    res.download(filePath) */

    //6.redirect():重定向
    // res.redirect("http://www.baidu.com")

    //7.设置响应头 不需要使用setHeader方法，直接使用set方法即可
    //8.设置状态码使用 status即可
    res.set("hello", "world").status(200);
    // res.status(200)
    res.send("okk")
})


//4.启动服务（要告诉端口号,主机地址默认已经开启了127.0.0.1 本地ip192.168.17.62）
app.listen(3000, err => {
    if (err) {
        console.log("服务器启动失败", err);
        return
    }
    console.log("服务器启动成功 请访问 http://192.168.17.62:3000");
})