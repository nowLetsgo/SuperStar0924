import add from './js/add';

import laowang from './js/user.json';

import './css/01.css';

import './css/02.less';

// 使用模块化的形式引入图片
import dog from './img/01.jpg';

// 使用模块化的形式引入图片2
import person from './img/05.jpg';

// import '@babel/polyfill'

add(1, 2);

const say = () => {
  // eslint-disable-next-line
  console.log('say');
};
say();

const p1 = new Promise((resolve) => {
  resolve('hello');
});

// eslint-disable-next-line
console.log(p1);

// eslint-disable-next-line
console.log(laowang);
// eslint-disable-next-line
console.log(dog);

// eslint-disable-next-line
const oImg = new Image();
// eslint-disable-next-line
oImg.src = dog;
// eslint-disable-next-line
document.body.appendChild(oImg);
// eslint-disable-next-line
console.log(person);

// eslint-disable-next-line
const oImg2 = new Image();
// eslint-disable-next-line
oImg2.src = person;
// eslint-disable-next-line
document.body.appendChild(oImg2);