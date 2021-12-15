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
    const fileEtag = etag(filePath);
    console.log(fileEtag);

    //获取文件的最后修改时间 fs.stat可以得到文件的详情
    const stat = promisify(fs.stat);
    const fileStat = await stat(filePath)
    console.log(fileStat.mtime.toGMTString());
    const fileStatMTime = fileStat.mtime.toGMTString();
})
app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功， http://192.168.17.62:3000");
})