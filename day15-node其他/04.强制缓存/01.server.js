const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "index.html");
    res.sendFile(filePath);
})

app.get("/img", (req, res) => {
    const filePath = path.resolve(__dirname, "01.jpg");
    res.set("Cache-Control", "max-age=10")
    res.sendFile(filePath)
})
app.listen(3000, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("成功， http://192.168.17.62:3000");
})