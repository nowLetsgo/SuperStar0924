const fs = require("fs");
const path = require("path");
const readFilePath = path.resolve(__dirname, "01.mp4");
const writeFilePath = path.resolve(__dirname, "02.mp4");

//创建可读流
const rs = fs.createReadStream(readFilePath)
//创建可写流
const ws = fs.createWriteStream(writeFilePath)

/* 
    pipe方法，可以直接通过管道把一个可读流写入到一个可写流中

*/
//边读边写
rs.pipe(ws)


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