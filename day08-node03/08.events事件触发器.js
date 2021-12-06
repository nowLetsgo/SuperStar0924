//引入事件触发器
const EventEmitter = require('events');

//实例化事件触发器
const myEvent = new EventEmitter();

//定义一个事件
//方式1
/* myEvent.on("hello", function () {
    console.log("hello事件触发");
}) */

//方式2
/* myEvent.addListener("hello", function () {
    console.log("hello事件触发");
}) */

//方式3
myEvent.once("hello", function () {
    console.log("hello事件触发");
})

//触发这个事件
myEvent.emit("hello")
myEvent.emit("hello")
myEvent.emit("hello")
myEvent.emit("hello")
myEvent.emit("hello")