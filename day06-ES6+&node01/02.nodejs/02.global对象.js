console.log(global)
console.log(global.global)
console.log(global.process)
console.log(global.console)
/* 
    Object [global] {
        global: [Circular *1],//自身
        clearInterval: [Function: clearInterval],//清间歇调用计时器
        clearTimeout: [Function: clearTimeout],  //清延迟调用计时器
        setInterval: [Function: setInterval],//间歇调用计时器
        setTimeout: [Function: setTimeout] {//延迟调用计时器
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],//微任务
        clearImmediate: [Function: clearImmediate],//清立即执行计时器
        setImmediate: [Function: setImmediate] {//立即执行计时器
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        process,//进程
        Buffer,//流
        console//打印
    }



*/