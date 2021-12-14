const express = require("express");
const router = express.Router();

//配置一个登录和注册要经过中间件 进行正则校验
router.use("/login", regFn)
router.use("/register", regFn)

function regFn(req, res, next) {
    const {
        username,
        password
    } = req.body;

    //大写字母开头，后边跟3-10位的数字字母
    const usernameReg = /^[A-Z][A-Za-z0-9]{3,10}$/g;

    //正则校验
    const regResult = usernameReg.test(username);

    //如果校验失败，则直接响应失败结果
    if (!regResult) {
        return res.send({
            code: 10008,
            msg: "用户名格式有误"
        })
    }

    //如果成功则进行下一步处理
    next();
}

module.exports = router;