/* 
    Buffer:缓冲器
        Buffer是一个和数组类似的对象，不同是Buffer是专门用来保存二进制数据的(数据储存为二进制数据，性能是最好的)。
        Buffer 类在全局作用域中，在Global上，可以直接使用，但是更建议显示引入

*/

//如果显示引入的化，请使用解构赋值的形式去接收
const {
    Buffer
} = require("buffer");
// console.log(Buffer);



/* 

Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

*/
const buf1 = Buffer.alloc(10, "atguigu");
console.log("buf1", buf1);

//toString方法 可以把Buffer转为字符串
console.log("buf1-->toString", buf1.toString());

/* 
Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

*/

const buf2 = Buffer.allocUnsafe(10, "atguigu");
console.log("buf2", buf2);
console.log("buf2.toString", buf2.toString());


/* 
Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
*/
const buf3 = Buffer.from("尚硅谷");
console.log("buf3", buf3);
console.log("buf3.toString", buf3.toString());