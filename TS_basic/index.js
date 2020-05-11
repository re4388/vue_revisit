const person = {
    first: 'apple',
    last: 'banana'
};
const person2 = {
    first: "apple2",
    last: "banana2",
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(2, 3);
function pow2(x, y) {
    Math.pow(x, y).toString();
}
pow2(2, 3);
const arr = [];
arr.push(23);
// arr.push('22');
const arr2 = [];
const arr3 = [];
arr3.push(23);
arr3.push('22');
// Generics
class Observerble {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observerble(23);
