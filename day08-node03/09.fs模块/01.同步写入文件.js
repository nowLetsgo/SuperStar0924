const fs = require("fs");
const path = require("path");

//得到要操作的文件路径
const filePath = path.resolve(__dirname, "01.txt")

//同步打开文件,同步的结果都是直接返回的,open方法返回的是一个文件标识ID
const fd = fs.openSync(filePath, "a");
console.log("fd", fd);

//同步写入文件
fs.writeSync(fd, "蓬松的头发")

//关闭文件
fs.closeSync(fd)