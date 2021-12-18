import add from './js/add';

import laowang from './js/user.json';

import './css/01.css';

import './css/02.less';

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