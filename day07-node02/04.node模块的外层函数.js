/* 
    当一个js文件 被使用node启动的时候，则默认被认定为一个模块
    node会在模块的最外层放一个函数，并在启动的时候调用函数并传参
*/
console.log(arguments); //打印所有的实参
// console.log(arguments.callee.toString()); //打印当前所在的函数


/* 
    根据打印，外层包裹的函数如下：
    function (exports, require, module, __filename, __dirname) {}

    - exports:一个对象，这个对象包含了所有暴露的内容
    - require:一个方法，用来引入其他模块的
    - module:关于当前模块详细的信息
    - __filename:当前的文件绝对路径
    - __dirname:当前文件所在文件夹的绝对路径
*/

//隐藏函数的形参可以直接进行使用
// console.log(__dirname);