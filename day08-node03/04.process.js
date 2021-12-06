/* 
    process 对象提供有关当前 Node.js 进程的信息并对其进行控制。 虽然它作为全局可用，但是建议通过 require显式地访问它

*/
const process = require("process");

// console.log("process", process);

/* 
    argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
        - node.exe的绝对路径
        - 被启动文件的绝对路径
        - 我们自定义的启动命令，可以根据我们自定义的启动命令，做一些其他操作

*/
console.log("argv", process.argv);
if (process.argv.includes("hello")) {
    console.log("欢迎光临");
} else {
    console.log("byebye");
}


/* 
    argv0 属性保存当 Node.js 启动时传入的 argv[0] 的原始值的只读副本,也就是获取nodejs程序目录


*/
console.log("argv[0]", process.argv[0]);
console.log("argv0", process.argv0);


/* 
    cwd() 方法返回 Node.js 进程的当前工作目录。绝对路径

*/
console.log("cwd", process.cwd());


/* 
    exit([code]) 退出进程

*/
let count = 0;
setInterval(() => {
    count++;
    console.log(count);
    if (count >= 10) {
        process.exit();
    }
}, 300)