/* 
    path 模块提供了用于处理文件和目录的路径的实用工具。 可以使用require引入他
*/
const path = require("path");

/* 
    path.resolve([...paths]) 方法将路径或路径片段的序列解析为绝对路径
*/

const path1 = path.resolve("../", "hello", "doc");
console.log(path1);


const path2 = path.resolve("./", "01.txt")
console.log("path2", path2);


const path3 = path.resolve(__dirname, "01.txt")
console.log("path3", path3);