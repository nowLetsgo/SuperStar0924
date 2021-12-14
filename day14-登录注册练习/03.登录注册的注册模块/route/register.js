const express = require("express");
//引入数据库的用户集合
//引入数据库的用户集合
const userModel = require("../models/userModel");

//[注意！！！]在非入口文件中，不要使用app来定义路由，因为app只有一个，并且在入口文件中，如果自己使用了app，则不能和入口文件共用一个app了
// const app = express();

//在子模块引入 express.Router(),把所有的路由使用这个挂载在这个router上即可，将来把router暴露给入口文件，再和这个路由器挂载在app上
const router = express.Router();

/* 
    接口文档：
        method：post
        url:/register
        请求参数：
            username:用户名
            password：密码
        响应：
            {
                code：注册状态码
                msg：注册状态
            }

*/
router.post("/register", async (req, res) => {
    //接受请求数据
    const {
        username,
        password
    } = req.body;

    //要先验证用户名是否存在（去数据库查询是否有当前用户名的数据）
    //findOne查找数据库是异步的，返回promise对象，值是null或者查到的数据
    const findResult = await userModel.findOne({
        username
    })

    //如果查找结果存在，则说明用户名重复
    if (findResult) {
        return res.send({
            code: 10001,
            msg: "改用户名已经存在"
        })
    }

    //当用户名查找不存在的时候，应该进行注册
    await userModel.create({
        username,
        password
    })

    //等待注册成功以后，响应结果
    res.send({
        code: 10000,
        msg: "注册成功"
    })

})

module.exports = router;