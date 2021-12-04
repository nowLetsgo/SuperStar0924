function add(a, b) {
    return a + b
}

function fn() {
    console.log("我是附加的");
}

/* 
    暴露一个模块的方法：    
        - 在module对象上有一个exports对象，这个对象所保存的信息就是真正暴露的内容
        - 我们只要把想要暴露的内容放在 module.exports上，即可暴露出去

    暴露有两种情况：    
        - module.exports = add;
            把默认暴露的空对象 直接修改为 我们要暴露的对象，将来接受的时候直接可以得到当前暴露的对象
            只适用于本模块只暴露一个功能，否则可能会覆盖

        - module.exports.add = add;
            给默认暴露的空对象添加一个新的属性为我们要暴露的功能，将来接受的时候，需要通过 《对象.功能》的方式使用
            当一个模块暴露多个功能的时候，使用这种暴露方式


    暴露一个模块的另外一个方法：
        - exports是函数提供的简单暴露的方法，他指向了module.exports默认暴露的对象
        - 但是一旦更换了module.exports指向的对象，exports仍然还是指向原来默认暴露的对象，失效状态不能使用了
        - exports = add:是无法把add暴露出去的，因为exports被改变了地址，不再指向真正暴露的对象(module.exports),所以exports失效
*/

/* module.exports.add = add;
module.exports = add; */

/* module.exports = fn;
exports.add = add; */

// exports = add;