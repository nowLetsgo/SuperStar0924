/* 
    统一暴露：
        使用export暴露一个对象，把要暴露的值放在对象内

*/

function add(a, b) {
    console.log(a + b);
}

function mins() {
    console.log("mins");
}

const o = {
    name: "laowang"
}

function say() {
    console.log("say");
}

export {
    add,
    o,
    //在暴露的时候起别名
    say as say1
}