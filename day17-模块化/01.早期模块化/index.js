//简单封装 Namespace模式
const lph = {
    add() {

    },
    mins() {

    },
    say() {

    }
}

lph.add()
lph.mins()



//IIFE
const lph = (function () {
    var i = 0;
    i++;

    function add() {

    }

    function min() {

    }
    return {
        add,
        min
    }
})()

lph.add();
lph.min();