/* 
 * 连接数据库
 */

//1.引入mongoose模块
const mongoose = require("mongoose");

//2.mongoose提供了一个connect方法进行连接数据库,connect方法的参数就是数据库的地址
mongoose.connect("mongodb://localhost:27017/super", (err) => {
    if (err) {
        console.log("数据库连接失败", err);
        return;
    }
    console.log("数据库连接成功");
})
//3.监听是否连接数据库成功事件
//在mongoose上有一个connection对象，可以绑定open事件，当数据库连接成功的时候，会触发open事件
//connect回调或者当前的事件 只需要写一个就行了
mongoose.connection.once("open", () => {
    console.log("数据库连接成功");
})


/* 
 * 创建schema集合约束对象
 */
const studentsSchema = new mongoose.Schema({
    // name:String//限制name字段必须是字符串类型
    name: {
        type: String, //字符串类型
        unique: true, //唯一的
        required: true //必填项
    },
    age: {
        type: Number,
        require: true
    },
    sex: {
        type: String,
        required: true,
    },
    hobby: {
        type: [String], //类型是一个数组，数组的值是一个字符串
        default: ["无"]
    },
    createTime: {
        type: Date,
        default: new Date //默认时间，不要加调用
    }
})