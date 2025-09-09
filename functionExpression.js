// const greeting = function (name) {
//     return `Hello, ${name}`;
// }
const greeting = name => {
    return `Hello, ${name}`;
}// стрелочная функция
// const greeting = (name) => {
//     return `Hello, ${name}`;
// }
const printName = (name) => console.log`My name is ${name}`;
printName(`Mary`);// My name is Mary
console.log(`-------------------`);


greeting(`John`); // "Hello, John"
console.log(greeting(`John`));
console.log(greeting);
const greeting2 = greeting;
console.log(greeting2(`Jane`)); // "Hello, Jane"
console.log(greeting2);
console.log(typeof greeting);
console.log(typeof greeting2);
console.log(greeting === greeting2); // true
console.log(`-------------------`);

let res = pow2(4)// x=4
console.log(res);
const fn1 = pow2;
res = fn1(3)
console.log(res);
console.log(pow2);
console.log(fn1);
res = factorial(5);
console.log(res); // 120
console.log(`-------------------`);
res = uniFunc(4, factorial, pow2);// a=4 fn1=factorial fn2=pow2
console.log(res); // 24
res = uniFunc(2, x=> x ** 3, a=> a ** 2);// a=2 fn1=factorial fn2=pow2
console.log(res); // 2
res = uniFunc(-3, factorial, pow2);
console.log(res); // 9
res = uniFunc(-3, `x=> x**3`, `pow2`); // eval
console.log(res); // 1

// fn1, fn2 - callback functions

function uniFunc(a, fn1, fn2) {//let a let fn1 let fn2
    if (typeof a !== 'number' || typeof fn1 !== 'function' || typeof fn2 !== 'function') {
        return null;
    }
    // console.log(typeof a);
    // console.log(typeof fn1);
    // console.log(typeof fn2);
    // console.log(a);
    // console.log(fn1);
    // console.log(fn2);
    if (a > 0) {
        return fn1(a);
    } else {
        return fn2(a);
    }
}

const pow3 = x => x ** 3;

function pow2(x) {
    return x ** 2;

}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1); // рекурсия
}

//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
//
// }