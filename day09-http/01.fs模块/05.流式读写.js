const fs = require("fs");
const path = require("path");
const readFilePath = path.resolve(__dirname, "01.mp4");
const writeFilePath = path.resolve(__dirname, "02.mp4");

//创建可读流
const rs = fs.createReadStream(readFilePath)
//创建可写流
const ws = fs.createWriteStream(writeFilePath)

//边读边写
rs.on("data", (chunk) => {
    // console.log(chunk);
    //每次把读到的chunk写入到可写流
    ws.write(chunk)
})


//可读流读完之后会触发一个end事件
rs.on("end", () => {
    console.log("文件读写完毕");
    //关闭可写流
    ws.end()
})

//查看可读流是否关闭
ws.on("close", () => {
    console.log("可写流关闭");
})