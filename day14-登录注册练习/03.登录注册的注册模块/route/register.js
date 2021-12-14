const express = require("express");

//[注意！！！]在非入口文件中，不要使用app来定义路由，因为app只有一个，并且在入口文件中，如果自己使用了app，则不能和入口文件共用一个app了
// const app = express();


//在子模块引入 express.Router(),把所有的路由使用这个挂载在这个router上即可，将来把router暴露给入口文件，再和这个路由器挂载在app上
const router = express.Router();


router.get("/register", (req, res) => {
    res.send("hello")
})

module.exports = router;