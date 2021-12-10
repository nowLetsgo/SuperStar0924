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
 * 查：mongoose的集合有两个方法可以查询数据库：find和findOne
 * find查找有一个回调函数，当然也可以返回一个promise对象,在then中可以得到查询的结果
 * find查找在对比的时候，就算的对象类型，也能直接比较是否相等（不像js中需要对比引用地址）
 * findOne查不到返回null，find查不到返回空数组 
 */

const findResult = studentsModel.findOne({
    $where: function () {
        return this.hobby.includes("抽烟")
    }
})

// console.log("findResult", findResult);
findResult.then(value => {
    console.log(value)
}, reason => {
    console.log(reason)
})