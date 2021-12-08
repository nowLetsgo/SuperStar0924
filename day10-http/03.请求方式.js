/* 
    常见请求方式：
        - get(查):主要向服务端查询数据使用，请求报文体没有内容，数据写在请求的url地址上
        - post(增)：主要向服务新增一些资源
        - put(改)：主要是修改服务端的一些资源，也可以上传文件
        - delete(删):请求删除服务端的某些资源
        - head:检查请求是否可以到达
        - options：预检请求，查看服务端支持的请求方式

    get和post的区别：
        - get是获取数据的，而post是提交数据的
        - get默认读取缓存，post不会读缓存
        - post发送的数据更大，get有url长度限制
        - post能发送更多的数据类型（get只能发送ASCII字符）
        - get发送的数据在url地址上，post在报文体中

*/