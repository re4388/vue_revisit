
//  What is THIS in JavaScript? in 100 seconds
// https://www.youtube.com/watch?v=YOlr79NaAtQ


// In js, this is much more complicated than self in Python
// In gerernal, it refer to run-time global execution context obj


// 1. you get global window obj when type below in chrome brower env
// console.log(this);

// 2. you get global obj when type this in node js env
// console.log(this);


// 3. function will get this env global this
// function whoisthis() {
//   console.log(this);
// }

// whoisthis(); // get global this, depend on you at brower or node.js env

// // 4. put this inside obj, this is that obj
// function whoisthis() {
//   console.log(this);
// }

// const jeff = {
//   face: "handsome",
//   whoisthis,
// };

// jeff.whoisthis() // =>  Object {face: "handsome", whoisthis: }



// // 5. bind to obj

// function checkThisFun() {
//   console.log(this);
// }

// const obj = {
//   face: "handsome",
// };

// // bind checkThisFun to obj and return another func
// const new_fun = checkThisFun.bind(obj)

// new_fun()  // => Object {face: "handsome"}


// // 6. new, this refer to obj

// function Horse(name) {
//     this.name = name
//     this.sayHello = function () {
//         console.log('aloha');
//     }
// }

// const myHorse = new Horse('Jack')
// console.log(myHorse.name) // => Jack
// myHorse.sayHello() // => aloha



// Below is the this wired part!!!


// // 7. this is undefine in stric mode when u refer to global obj

// 'use strict'

// function thisIsFun(){
//     console.log(this);
// }

// thisIsFun() // => undefined



// // 8. arrow function don't bind to local context

// const jeff = {
//     face:'good',
//     declareFun: function () {
//         console.log(this);  // jeff
//     },

//     arrowFun: () => console.log(this) // global
    
// }

// jeff.declareFun(); // => { face: 'good', whodis: [λ: whodis], butWhoAmI: [λ: butWhoAmI] } 
// jeff.arrowFun(); // => {}


// 9. bind, call apply
// bind like above


// function showFace() {
//     return this.face
// }

// const jeff = {
//     face:'good'
// }

// showface2 = showFace.bind(jeff)
// console.log(showface2())


// // call and apply is the nearly the same , but apply take array as arg

// function showFace() {
//   return this.face;
// }

// const jeff = {
//   face: "good",
// };

// // just call with that obj
// console.log(showFace.call(jeff)); // => good

// // apply go with array as args
// console.log(showFace.apply(jeff, [1,2,3]));

// // but, you can use spread oprator with call, that will be the same as apply
// console.log(showFace.call(jeff, ...[1, 2, 3]));


// 10. use in class with JS sytaix suger


// 11. use with chaining

function Horse(name) {
    this.name = name
    this.sayHello = function () {
        console.log('aloha');
        return this
    }
}

const myHorse = new Horse('Jack')
myHorse.sayHello().sayHello().sayHello(); // => aloha, aloha, aloha


