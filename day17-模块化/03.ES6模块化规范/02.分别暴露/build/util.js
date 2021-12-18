"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports["default"] = void 0;
exports.mins = mins;
exports.o = void 0;

/* 
    分别暴露：
        使用export进行暴露，export后必须跟完整的声明语句

*/
function add(a, b) {
  console.log(a + b);
}

function mins() {
  console.log("mins");
}

var o = {
  name: "laowang"
};
exports.o = o;

function say() {
  console.log("say");
}

var _default = say;
exports["default"] = _default;