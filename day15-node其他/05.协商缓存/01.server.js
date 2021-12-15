const express = require("express");
const path = require("path");
const zlib = require("zlib");
const fs = require("fs")
const app = express();


app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath);
})

app.get("/axios", async (req, res) => {
    const filePath = path.resolve(__dirname, "axios.min.js");

    const acceptEncoding = req.headers["accept-encoding"];

    //把当前请求的文件得到一个可读流
    const rs = fs.createReadStream(filePath)
    if (acceptEncoding.includes("gzip")) {
        // zlib.createGzip():创建一个空的压缩格式的 可写流
        // 返回一个可读流 压缩包的可读流
        const gzipFile = rs.pipe(zlib.createGzip())

        //在响应之前，设置我们压缩的格式
        res.set("Content-Encoding", "gzip")
        //把当前的压缩包的可读流写入到响应中
        return gzipFile.pipe(res);
    }
    if (acceptEncoding.includes("deflate")) {
        // zlib.createGzip():创建一个空的压缩格式的 可写流
        // 返回一个可读流 压缩包的可读流
        const gzipFile = rs.pipe(zlib.createDeflate())

        //在响应之前，设置我们压缩的格式
        res.set("Content-Encoding", "deflate")
        //把当前的压缩包的可读流写入到响应中
        return gzipFile.pipe(res);
    }

    res.sendFile(filePath)

})
app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功， http://192.168.17.62:3000");
})