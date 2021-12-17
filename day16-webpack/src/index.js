import add from './js/add';

import laowang from './js/user.json';

import './css/01.css';

import './css/02.less';

// import '@babel/polyfill'

add(1, 2);

const say = () => {
  console.log('say');
};
say();

const p1 = new Promise((resolve) => {
  resolve('hello');
});
console.log(p1);

console.log(laowang);
