//1.引入express包
const express = require("express");

//2.引入的express是一个函数，需要调用express函数，才能得到一个应用对象app,所有搭建服务的方法属性都是app对象上
const app = express();

//3.书写一个get请求接口,用来接收请求，get方法的第二个参数是一个回调函数，回调函数有两个参数分别是req,res
app.get("/", (req, res) => {
    console.log("有人来请求我了");
    res.end("hello heng!!")
})

app.get("/home", (req, res) => {
    res.end("welcome my home")
})


//4.启动服务（要告诉端口号,主机地址默认已经开启了127.0.0.1 本地ip192.168.17.62）
app.listen(3000, err => {
    if (err) {
        console.log("服务器启动失败", err);
        return
    }
    console.log("服务器启动成功 请访问 http://192.168.17.62:3000");
})

