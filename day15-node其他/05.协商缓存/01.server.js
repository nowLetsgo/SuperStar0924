const express = require("express");
const path = require("path");
const etag = require("etag");
const fs = require("fs");
const {
    promisify
} = require("util")
const app = express();


app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath);
})

app.get("/axios", async (req, res) => {
    const filePath = path.resolve(__dirname, "axios.min.js");
    //获取文件的唯一标识
    const Etag = etag(filePath);

    //获取文件的最后修改时间 fs.stat可以得到文件的详情
    const stat = promisify(fs.stat);
    const fileStat = await stat(filePath)
    console.log(fileStat.mtime.toGMTString());
    const lastModified = fileStat.mtime.toGMTString();

    //获取请求对象携带的if-modified-since if-none-match
    console.log(req.headers);
    const ifNoneMatch = req.headers["if-none-match"];
    const ifModifiedSince = req.headers['if-modified-since'];

    //把请求携带的信息和服务端文件的信息对比，如果有一个不一致，则重新响应文件
   
    if (ifNoneMatch !== Etag || ifModifiedSince !== lastModified) {
        //当读取新资源的时候，需要重新设置文件唯一标识 和最后修改时间的 响应头
        res.set("etag", Etag);
        res.set("last-modified", lastModified);
        return res.sendFile(filePath);
    }

    //如果上边的判断不成立，则需要读取缓存
    res.status(304).send();
})
app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功， http://192.168.17.62:3000");
})