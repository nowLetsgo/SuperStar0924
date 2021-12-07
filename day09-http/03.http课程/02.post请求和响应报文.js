/* 
    POST请求报文
        POST http://192.168.17.62:3000/ HTTP/1.1
        Host: 192.168.17.62:3000
        Connection: keep-alive
        Content-Length: 19
        Cache-Control: max-age=0
        Upgrade-Insecure-Requests: 1
        //报文体数据格式
        Content-Type: application/x-www-form-urlencoded
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/*;q=0.8,application/signed-exchange;v=b3;q=0.9
        Accept-Encoding: gzip, deflate
        Accept-Language: zh-CN,zh;q=0.9

        user=laoli&pass=123(POST请求携带的数据都在报文体中)

*/


/* 
    POST响应报文：
        HTTP/1.1 200 OK
        Content-type: text/plain;charset=utf-8
        Date: Tue, 07 Dec 2021 08:56:35 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        Content-Length: 36

        hello 你是第58639个访问我的~

*/