const express = require("express");
//引入数据库的用户集合
const userModel = require("../models/userModel");


//在子模块引入 express.Router(),把所有的路由使用这个挂载在这个router上即可，将来把router暴露给入口文件，再和这个路由器挂载在app上
const router = express.Router();

/* 
    接口文档：
        method：post
        url:/login
        请求参数：
            username:用户名
            password：密码
        响应：
            {
                code：登录状态码
                msg：登录状态
            }

*/
router.post("/login", async (req, res) => {
    //接受请求数据
    const {
        username,
        password
    } = req.body;

    //把用户名发到数据库查询，得到查询的结果
    const findResult = await userModel.findOne({
        username
    })

    //如果查找结果不存在，则说明用户名不存在
    if (!findResult) {
        return res.send({
            code: 10001,
            msg: "该用户名未注册"
        })
    }

    //当用户名存在的时候，校验密码
    if (findResult.password !== password) {
        return res.send({
            code: 10002,
            msg: "密码错误"
        })
    }

    //校验成功，设置cookie和响应
    res.cookie("user_id", findResult._id, {
        // expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), //http1.0版本设置过期时间，后边跟一个时间对象
        maxAge: 1000 * 60 * 60 * 24 * 7, //http1.1版本提供的设置cookie过期时间，直接书写cookie的保质期即可
        httpOnly: true, //仅仅服务端可以操作
    })
    res.send({
        code: 10000,
        msg: "登录成功"
    })


})

module.exports = router;


//七天以后的时间
// new Date().setDate(new Date().getDate() + 7)
// new Date(Date.now()+1000*60*60*24*7)