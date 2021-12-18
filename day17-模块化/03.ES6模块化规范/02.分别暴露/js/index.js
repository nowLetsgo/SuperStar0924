//引入分别暴露的模块
//1.一般使用解构赋值的形式接受暴露的内容
/* import {
    add,
    mins,
    o
} from './util';

console.log(add, mins, o); */

//分别暴露可以给暴露的对象 使用as 起一个别名
/* import {
    add as add1,
    mins,
    o
} from './util';

console.log(add1, mins, o); */

//引入分别暴露的时候，不想分开单独接受每一个暴露的值，而是想用一个对象接收整体的暴露
import * as obj from './util';
console.log(obj);

//引入默认暴露 并起别名(引入的时候 直接换一个名字即可)
import speek from './util'
console.log(speek);