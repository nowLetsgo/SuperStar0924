//require只要使用了就会执行引入的模块，如果没有暴露，则不需要接受
require('./db')

//引入studentsModel集合模块
const studentsModel = require("./models/studentsModels");

//测试
studentsModel.create({
    name: "laowang",
    age: 18,
    sex: "nan",
    hobby: [],
})