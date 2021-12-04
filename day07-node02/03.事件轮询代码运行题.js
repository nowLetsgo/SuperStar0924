//题目1： 2 1 4 3 6

/* process.nextTick(() => {console.log(111);});

// 属于同步代码
const promise = new Promise(resolve => {
  console.log(222);
  resolve();
});

setTimeout(() => {console.log(333);}, 1000);

promise.then(() => {console.log(444);});

setImmediate(() => {console.log(666);}); */


//题目2：
//1  4  8 5 2 6 3 9
/* process.nextTick(() => {console.log(111);});//微

setTimeout(() => {console.log(222);}, 0);//宏   
setImmediate(() => {console.log(333);});//宏

const promise = Promise.resolve();

promise
  .then(() => {//微
    console.log(444);
    //这里的nextTick会自己创建一个第二微任务梯队存放，不会放在当前非第一个位置上
    process.nextTick(() => {console.log(555);});//微
    setTimeout(() => {console.log(666);}, 0);//宏
  })
  .catch(() => {console.log(777);})//微
  .then(() => {
    console.log(888);//微
    setImmediate(() => {console.log(999);});//宏
  })
  .catch(() => {console.log(101010);})//微 */


//题目3：
//4 1 3 6 8 2 7 5
/* async function async1() {
    console.log('1');
    await async2(); //先执行async 然后才执行await的
    console.log('2')
}
async function async2() {
    console.log('3')
}
console.log('4');
setTimeout(() => {
    console.log('5')
}, 0);
async1();
new Promise((resolve) => {
    console.log('6');
    resolve()
}).then(() => {
    console.log('7')
});
console.log('8') */

//题目4
// 1 2 3 5 4
/* setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve => {
    console.log(1);
    for (let i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(2)
}).then(() => {
    console.log(5)
})

console.log(3) */

//题目5
//1 3 2 4
/* Promise.resolve().then(() => {
    console.log(1);
    queueMicrotask(() => {
        console.log(2);
    })
})
Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () {
        console.log(4);
    });
}); */


//题目6 
//1  3 4 2
/* Promise.resolve().then(() => {
    console.log(1);
    process.nextTick(() => {
        console.log(2);
    })
})
Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () {
        console.log(4);
    });
}); */


//题目7：
//1 2 3  8 4 7 5 6
/* new Promise((resolve, reject) => {
        console.log(1)
        resolve(1)
    }).then(() => {
        console.log(2)
        new Promise((resolve, reject) => {
                console.log(3)
                resolve()
            })
            .then(() => {
                console.log(4)
            })
            .then(() => {
                console.log(5)
            })
            .then(() => {
                console.log(6)
            })
        console.log(8);
    }).then(() => {
        console.log(7)
    }) */


//题目8：
//1 2 9 4 10 13  3 15 16 5 6  8 7
/* console.log(1); //
new Promise(function (resolve) {
    resolve();
    console.log(2); //
    setTimeout(function () { //定1
        console.log(3); //
    }, 0);
    Promise.resolve().then(function () { //then1
        console.log(4); //
        setTimeout(function () {//定3
            console.log(5);
        }, 0);
        setTimeout(function () {//定4
            (async function () {
                console.log(6);
                return function () {
                    console.log(7);
                };
            })().then(function (fn) {
                console.log(8);
                fn();
            });
        }, 0);
    });
    new Promise(function (resolve) {
        console.log(9); //
        resolve();
    }).then(function () { //then2
        new Promise(function (resolve, reject) {
            console.log(10);
            reject();
        }).then(function () {
            setTimeout(function () {
                console.log(11);
            }, 0);
            console.log(12);
        }).catch(function () {//catch1
            console.log(13);
        });
    });
});
setTimeout(function () { //定2
    console.log(15);
    Promise.resolve().then(function () {
        console.log(16);
    });
}, 0); */


//题目9：
// 1 2 19 3 5 4 20 9 10 11 17 13 12 6 7 16 8 15 14
/* console.log(1); //
new Promise((res, rej) => {
    console.log(2); //
    res();
}).then(() => {//then1
    console.log(3); //
    Promise.resolve().then(() => {//then3
        console.log(5);
        setTimeout(function () {//定5
            console.log(6); //
            Promise.resolve().then(function () {
                console.log(7);
            });
            setTimeout(function () {//定7
                console.log(8);
            }, 0);
        }, 0);
    });
}).then(() => {//then4
    console.log(4);
});

new Promise((res) => {
    console.log(19); //
    setTimeout(() => {//定1
        console.log(20); //
    }, 0);
});
Promise.resolve().then(() => {//then2
    setTimeout(() => {//定4
        Promise.resolve().then(() => {
            console.log(12);
        });
        console.log(13); //
    }, 0);
});
setTimeout(() => {//定2
    console.log(9); //
    new Promise((res) => {
        res();
        console.log(10);
    }).then(() => {//then5
        console.log(11);
    });
});
setTimeout(() => {//定3
    setTimeout(() => {//定6
        setTimeout(() => {//定8
            Promise.resolve().then(() => {
                console.log(14);
            });
            console.log(15);
        }, 0);
        console.log(16);
    }, 0);
    console.log(17); //
}, 0); */