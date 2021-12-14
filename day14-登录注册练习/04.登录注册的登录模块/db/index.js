const mogoose = require("mongoose");
mogoose.connect("mongodb://127.0.0.1:27017/star0924");
mogoose.connection.on("open", () => {
    console.log("数据库连接成功");
})