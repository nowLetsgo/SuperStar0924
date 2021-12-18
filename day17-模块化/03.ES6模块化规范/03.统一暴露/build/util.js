"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.o = void 0;
exports.say1 = say;

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

var o = {
  name: "laowang"
};
exports.o = o;

function say() {
  console.log("say");
}