/* 
    流式写入:
        - fs模块处理文件的缺点：将文件的数据全读到内存中，在把数据写到文件内，会大量占用内存
        - 流（stream）是 Node.js 中处理流式数据的抽象接口，是一组有序的，有起点和终点的字节数据传输手段。可以实现将数据从一个地方流动到另一个地方，其边读取边写入的特点有别于fs模块的文件处理，并且可以做到控制读取文件和写入文件的速度，从而减少内存的占用
        - fs.createWriteStream(path[, options])

*/

const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "01.txt");

//创建一个可写流
const ws = fs.createWriteStream(filePath, {
    flags: "a"
});

//依次向可写流进行写入内容（wirte方法写入）
ws.write("锄禾日当午")
ws.write("汗滴禾下土")
ws.write("谁知盘中餐")
ws.write("粒粒皆辛苦")

ws.end(); //关闭开头(常用)
// ws.close(); //关闭末尾


//可写流的事件
ws.on("open", () => {
    console.log("可写流已经被打开");
})

ws.on("close", () => {
    console.log("可写流已经被关闭");
})