const http = require("http");
let count = 0;
//http模块上有一个createServer方法，可以创建一个服务
//createServer中有一个回调函数，是对服务的请求和响应进行处理
//回调函数接受两个参数 request请求对象  response响应对象
const server = http.createServer((request, response) => {
    // console.log("request", request);

    //每次请求开始计数
    count++;
    console.log(count);

    //在响应之前需要设置相应内容的数据格式，在响应头设置
    response.setHeader("Content-type", "text/plain;charset=utf-8")


    //response对象上有一个end方法，可以响应内容给客户端
    response.end(`hello 你是第${count}个访问我的~`)
});

//启动服务,使用listen方法启动服务，需要传入主机地址和端口号
/* 
    主机地址：
        127.0.0.1
        localhost
        192.168.17.62
    端口号范围：
        0-65535
        网络编程可用的端口一般在1024之后选取

*/
server.listen(3000, '192.168.17.62', (err) => {
    if (err) {
        console.log('服务器启动失败', err);
        return;
    }

    console.log("服务器启动成功， http://192.168.17.62:3000");
})