const crypto = require("crypto");


//选择加密方式（md5 sha1 sha256 sha512）
const md5 = crypto.createHash('md5');

//定义一个明文
let pass = "lipeihua0922";

//为了加密的严谨，可以选择加盐
pass += "atguigu"

//使用创建好的加密方式进行加密,并转成16进制的字符串展示
const secret = md5.update(pass, 'utf8').digest('hex');
console.log("secret", secret);