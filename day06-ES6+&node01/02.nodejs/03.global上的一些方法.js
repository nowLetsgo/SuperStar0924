/* 
    setImmediate
        - 内部是一个回调函数，回调函数是异步的，本方法类似于setTimeout的时间为0
        - 把同步代码放在setImmediate中，这个代码就是异步执行，并且是等同步代码执行结束后，立即执行
        - clearImmediate 方法可以用来取消通过setImmediate设置的将要执行的语句
*/

/* const imme = setImmediate(() => {
    console.log("setImmdiate");
})

//清除setImmediate
clearImmediate(imme)

console.log(1); */


/* 
    queueMicrotask：
        - 语义化设置一个微任务（属于异步代码，但是比异步代码中的宏任务优先执行）

*/
/* setImmediate(() => {
    console.log("setImmdiate");
})
queueMicrotask(() => {
    console.log('queueMicrotask');
})
console.log(1); */


/* 
    process.nextTick:
        - 属于微任务：永远保持微任务的第一个执行
        - 立即执行函数

*/
queueMicrotask(() => {
    console.log("queueMicrotask");
})
setImmediate(() => {
    console.log("setImmdiate");
})
process.nextTick(() => {
    console.log("process.nextTick");
})

console.log(1);