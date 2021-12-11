//1.引入express包
const express = require("express");
const path = require("path")

//2.引入的express是一个函数，需要调用express函数，才能得到一个应用对象app,所有搭建服务的方法属性都是app对象上
const app = express();

//书写一个处理post请求的中间件，把post请求的报文体处理成一个对象，并放在req.body上
app.use("", express.urlencoded({ //这个是处理form表单格式的报文体的
    extended: false
}))
app.use("", express.json()) //处理json格式的报文体的




//3.书写一个get请求接口,用来接收请求，get方法的第二个参数是一个回调函数，回调函数有两个参数分别是req,res
app.get("/", (req, res) => {
    console.log(req);
    //1.get请求是把数据放在了url地址上，被称作查询字符串
    //可以使用req.query得到一个对象，包含的是查询字符串的内容
    console.log(req.query);
})

//params参数
app.get("/:id", (req, res) => {
    //当请求地址可能书写的是一个params参数，需要我们使用/:XX的形式书写接口
    //获取用户传递的params参数 使用 req.params,得到一个对象 {XX:params的值}
    console.log(req.params);
})

//二级路由
app.get("/user/:id", (req, res) => {
    res.send("home")
})

//post请求接口
app.post("/login", (req, res) => {
    //经过官方提供的中间件之后，会把post请求的报文体组成一个对象 放在了body属性上，可以直接获取
    console.log(req.body);
})


//4.启动服务（要告诉端口号,主机地址默认已经开启了127.0.0.1 本地ip192.168.17.62）
app.listen(3000, err => {
    if (err) {
        console.log("服务器启动失败", err);
        return
    }
    console.log("服务器启动成功 请访问 http://192.168.17.62:3000");
})