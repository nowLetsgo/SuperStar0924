const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "index.html")
const videoPath = path.resolve(__dirname, "01.mp4")
const server = http.createServer((req, res) => {

    /* //响应一个html首页出去
    //设置MIME类型
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    //读文件并响应
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err, "读取文件错误err");
            return;
        }
        res.end(data);
    }) */

    /* //响应一个html首页出去
    res.setHeader("Content-Type", "application/javascript;charset=utf-8")
    res.end('alert(1)') */

    //响应一个视频出去
    res.setHeader("Content-Type", "video/mp4;charset=utf-8")
    fs.readFile(videoPath, (err, data) => {
        if (err) {
            console.log(err, "读取文件错误err");
            return;
        }
        res.end(data);
    })

});



//启动服务,使用listen方法启动服务，需要传入主机地址和端口号
server.listen(3000, '192.168.17.62', (err) => {
    if (err) {
        console.log('服务器启动失败', err);
        return;
    }

    console.log("服务器启动成功， http://192.168.17.62:3000");
})