/* 
    分别暴露：
        使用export进行暴露，export后必须跟完整的声明语句

*/

export function add(a, b) {
    console.log(a + b);
}

export function mins() {
    console.log("mins");
}

export const o = {
    name: "laowang"
}

function say() {
    console.log("say");
}
export default say;