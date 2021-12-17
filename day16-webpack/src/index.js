import add from "./js/add";

import laowang from './js/user.json'

import './css/01.css'

import './css/02.less'

// import '@babel/polyfill'

add(1, 2);

const say = () => {
    console.log("say");
}

const p1 = new Promise((resolve, reject) => {
    resolve("hello")
})

console.log(laowang);