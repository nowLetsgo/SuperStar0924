const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "01.txt");

/* 
    创建可读流 fs.createReadStream()
*/

const rs = fs.createReadStream(filePath);

//可读流有一个data事件，每次读到一组数据后会触发data事件
rs.on("data", (chunk) => {
    /* 
        chunk就是可读流的数据
        每个chunk的大小固定64kb
    */
    console.log(chunk);
})

