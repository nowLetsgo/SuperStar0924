//引入统一暴露的模块
/* import {
    add as add1,
    o,
    say1
} from './util';

console.log(add1, o, say1); */

//使用一个对象接收统一暴露的内容
import * as obj from './util'
console.log(obj);