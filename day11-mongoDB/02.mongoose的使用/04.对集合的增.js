/* 
 * 连接数据库
 */

//1.引入mongoose模块
const {
    LongWithoutOverridesClass
} = require("bson");
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
 * 实例化mongoose中的Schema方法，传入一个对象
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
// console.log("studentsSchema", studentsSchema);

/* 
 * 根据已经设置好的schema约束对象，创建一个集合Model对象
 * 使用mongoose模块的model方法，传入集合名和对应的约束对象作为参数
 */
const studentsModel = mongoose.model("students", studentsSchema);
// console.log("studentsModel", studentsModel);


/* 
 * mongoose给数据库的某个集合的新增数据方法
 * 给某个集合调用create方法,即可新增数据，create方法内的写法和mongoDB语句insert内部写法一致
 * create方法是一个异步操作，它的第二个参数是一个回调函数，当新增成功之后会调用回调函数
 * 但是如果不写回调函数的话，craete会返回一个promise对象,promise对象成功的值就是新增的文档
 
*/

//新增一条
/* const createResult = studentsModel.create({
    name: "lao王",
    age: 18,
    sex: "男",
    hobby: ["吃饭", "喝水"],
    createTime: new Date()
})
console.log("createResult", createResult);
createResult.then(value => {
    console.log("新增成功", value);
}, reason => {
    console.log("新增失败", reason);
}) */

//新增多条
const createResult = studentsModel.create([{
    name: "lao张",
    age: 20,
    sex: "女",
    hobby: ["喝酒", "学习"],
}, {
    name: "laoli",
    age: 18,
    sex: "男",
    hobby: ["看书", "学习"],
    createTime: new Date()
}])
console.log("createResult", createResult);
createResult.then(value => {
    console.log("新增成功", value);
}, reason => {
    console.log("新增失败", reason);
})