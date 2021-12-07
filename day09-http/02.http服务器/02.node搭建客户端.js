const http = require("http");

//request方法创建客户端，书写请求的配置信息
const req = http.request('http://192.168.17.62:3000', response => {
    //初始化一个字符串 用来接收信息
    let str = '';
    // console.log(response);
    //在http作为客户端的时候，回调函数中的响应对象response是一个可读流，需要使用data事件来接受内容
    response.on("data", chunk => {
        // console.log(chunk);
        // console.log(chunk.toString());
        str += chunk.toString();
    })

    //当可读流读完之后会触发end事件
    response.on("end", () => {
        console.log(str);
    })
})

//发送请求
req.end();