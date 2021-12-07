const fs = require("fs");
const path = require("path");

/* 
    异步简单写入文件方法：fs.writeFile(file, data[, options], callback)
    会自动打开和关闭文件
*/
const filePath = path.resolve(__dirname, "01.txt")

fs.writeFile(filePath, "锄禾日当午", {
    flag: "a"
}, (err) => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log("文件写入完毕");
})