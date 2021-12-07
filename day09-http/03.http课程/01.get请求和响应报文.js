/* 
    get请求报文
        //1.请求报文首行（请求方式+主机地址和数据+http协议的版本号）
        GET http://192.168.17.62:3000/?user=laoli&pass=123 HTTP/1.1
        //2.请求报文头部（描述当前请求数据的详细信息）
        Host: 192.168.17.62:3000//主机地址
        Connection: keep-alive//保持TCP长连接
        Cache-Control: max-age=0//是否允许强制缓存，及缓存时间
        Upgrade-Insecure-Requests: 1//是否支持https
        //用户代理字符串（当前浏览器识别码）
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36
        //可以接收的数据格式
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/*;q=0.8,application/signed-exchange;v=b3;q=0.9
        //可以接收的压缩格式
        Accept-Encoding: gzip, deflate
        //可以接收的语言
        Accept-Language: zh-CN,zh;q=0.9
        //3.请求报文空行

        //4.请求报文体
        //get请求所携带的数据都会放在url地址上，而不会放在报文体中



*/


/* 
    get响应报文：
        //1.响应报文首行（协议+状态码+状态码原因短语）
        HTTP/1.1 200 OK
        //2.响应报文头部
        Content-type: text/plain;charset=utf-8//响应的数据格式
        Date: Tue, 07 Dec 2021 08:30:38 GMT//响应的时间
        Connection: keep-alive//保持长连接
        Keep-Alive: timeout=5//长连接过期时间是5ms
        Content-Length: 36//报文体的长度
        //3.响应报文空行

        //4.响应报文体
        hello 你是第42679个访问我的~


*/