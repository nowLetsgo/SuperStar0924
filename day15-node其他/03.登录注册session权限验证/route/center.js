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

    //session中保存用户所有的信息，可以获取到 就说明登录过，如果undeined则需要重新登录
    const re = req.session.user;
    console.log(re);

    if (!re) {
        return res.send({
            code: 10001,
            msg: "您没有权限"
        })
    }

    res.send({
        code: 10000,
        msg: re.username
    })


})

module.exports = router;


//七天以后的时间
// new Date().setDate(new Date().getDate() + 7)
// new Date(Date.now()+1000*60*60*24*7)