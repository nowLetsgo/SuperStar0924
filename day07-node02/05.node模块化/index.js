/* 
    require()方法：
        专门用来引入模块的

    require()方法内部：书写的是模块标识
        - nodejs提供的核心模块，直接书写模块名字符串即可 比如 'fs'
        - 第三方模块 比如jquery等，首先下载到本地(npm yarn等)，然后使用模块字符串的引入即可'jquery'
        - 自定义模块，书写书写相对路径找到对应模块，可以省略后缀名（默认添加后缀名,顺序是.js .json .node）

    require()一旦引入某个模块之后，这个模块会执行,并且返回值就是当前模块内部暴露的对象

    require()加载模块是同步的
*/

//引入核心模块
// require('fs')

//引入第三方模块
// require('jquery')


//引入自定义模块
//当模块暴露的是一个对象的时候，则可以通过解构赋值的方式拿到我们需要的功能
/* const {
    add
} = require('./add'); */

const add = require("./add");
console.log(add);