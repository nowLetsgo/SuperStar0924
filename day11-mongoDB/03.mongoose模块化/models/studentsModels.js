/* 
 * 创建schema集合约束对象
 * 实例化mongoose中的Schema方法，传入一个对象
 */
const mongoose = require("mongoose");
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

/* 
 * 根据已经设置好的schema约束对象，创建一个集合Model对象
 * 使用mongoose模块的model方法，传入集合名和对应的约束对象作为参数
 */
const studentsModel = mongoose.model("students", studentsSchema);
// console.log("studentsModel", studentsModel);

//暴露model对象
module.exports = studentsModel;