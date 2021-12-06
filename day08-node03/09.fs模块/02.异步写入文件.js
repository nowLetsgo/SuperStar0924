const fs = require("fs");
const path = require("path");

//获取被操作文件的路径
const filePath = path.resolve(__dirname, "01.txt")

//异步打开文件，但凡异步都会有回调函数，等到操作完成以后执行回调函数
//回调函数的参数就是 错误接受 和 打开的文件标识（第一个是错误接受，因为nodejs讲究错误优先处理）
fs.open(filePath, "a", (err, fd) => {
    if (err) {
        console.log("err", err);
        return;
    }
    console.log(fd);
    console.log('文件打开成功');


    //打开文件成功以后才能写入文件
    fs.write(fd, "锄禾日当午", (err) => {
        if (err) {
            console.log("文件写入失败", err);
            return;
        }
        console.log("写入成功");

        //关闭文件
        fs.close(fd, (err) => {
            if (err) {
                console.log("文件关闭失败", err);
                return;
            }
            console.log("文件关闭成功");
        })
    })
})

console.log("我是同步代码");