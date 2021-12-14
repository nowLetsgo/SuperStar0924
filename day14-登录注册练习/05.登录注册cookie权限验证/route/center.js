const express = require("express");
//引入数据库的用户集合
const userModel = require("../models/userModel");


//在子模块引入 express.Router(),把所有的路由使用这个挂载在这个router上即可，将来把router暴露给入口文件，再和这个路由器挂载在app上
const router = express.Router();

/* 
    接口文档：
        method：post
        url:/center
        请求参数：
            无（请求自动携带cookie）
        响应：
            {
                code：权限状态码
                msg：权限状态
            }

*/
router.post("/center", async (req, res) => {
    //接受cookie
    console.log(req.cookies);
    const userID = req.cookies.user_id;

    //验证userID在数据库中是否存在
    const userResult = await userModel.findOne({
        _id: userID
    })
    console.log(userResult);

    //如果用户发来的userID查询不到结果，则说明没有权限
    if (!userResult) {
        return res.send({
            code: 10001,
            msg: "您没有权限访问"
        })
    }

    //如果有权限 则响应一个用户名出去
    res.send({
        code: 10000,
        msg: userResult.username
    })





})

module.exports = router;


//七天以后的时间
// new Date().setDate(new Date().getDate() + 7)
// new Date(Date.now()+1000*60*60*24*7)