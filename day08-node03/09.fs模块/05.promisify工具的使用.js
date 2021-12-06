const fs = require("fs");
const path = require("path");
const {
    promisify
} = require("util");

//获取被操作文件的路径
const filePath = path.resolve(__dirname, "01.txt");

//使用promisify工具 把异步方法包装成返回promise对象的方法
const open = promisify(fs.open);
const write = promisify(fs.write);
const close = promisify(fs.close);

(async function () {
    //接受到成功的值 就是fd
    const fd = await open(filePath, "a");

    //写入文件
    await write(fd, "汗滴禾下土");

    //关闭文件
    await close(fd);

    return "打开写入关闭全部完成"

})()
.then(value => {
    console.log(value);
}).catch(reason => {
    console.log("出现问题", reason);
});