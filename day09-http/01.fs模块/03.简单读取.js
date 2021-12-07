/* 
    简单读取文件：
        fs.readFile(path[, options], callback)
*/

const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "01.txt");

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log("err", err);
        return;
    }
    //数据是一次性读完并且给到了data
    console.log(err, data);
    console.log(data.toString());
})