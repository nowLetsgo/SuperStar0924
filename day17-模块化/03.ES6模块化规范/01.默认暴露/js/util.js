function add(a, b) {
    console.log(a + b);
}

function mins() {
    console.log("mins");
}
//默认暴露：直接把某个 值 暴露出去
//在一个模块中 默认暴露只能暴露一个值出去
export default add;