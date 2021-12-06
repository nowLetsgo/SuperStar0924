const fs = require("fs");
const path = require("path");

//获取被操作文件的路径
const filePath = path.resolve(__dirname, "01.txt");

function open() {
    return new Promise((resolve, reject) => {
        fs.open(filePath, "a", (err, fd) => {
            if (err) {
                reject(err)
                return;
            }
            console.log("打开文件成功");
            resolve(fd)
        })
    })
}

function write(fd) {
    return new Promise((resolve, reject) => {
        fs.write(fd, "锄禾日当午", (err) => {
            if (err) {
                reject(err);
                return;
            }
            console.log("写入文件成功");
            resolve();

        })
    })
}

function close(fd) {
    return new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            if (err) {
                reject(err);
                return;
            }
            console.log("关闭文件成功");
            resolve();
        })
    })
}


(async function () {
    //接受到成功的值 就是fd
    const fd = await open();

    //写入文件
    await write(fd);

    //关闭文件
    await close(fd);

    return "打开写入关闭全部完成"

})()
.then(value => {
    console.log(value);
}).catch(reason => {
    console.log("出现问题", reason);
});