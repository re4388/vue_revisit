// function Person(name, gender){
//   this.name = name;
//   this.gender = gender;
// }
// console.log(Person.prototype); // {} 是一个空对象
// Person.prototype = {
//   country: 'China'
// };
// var a = new Person("Jason", 'male');
// var b = new Person("Amy", 'female');
// console.log(a.name); //
// console.log(b.name); //
// console.log(a.country); //
// console.log(b.country); //

// // demo what is __proto__ chain

// // a proto bind to Person.prototype
// console.log(a.__proto__ == Person.prototype);

// // a Person proto bind to Object prototype
// console.log(Person.prototype.__proto__  == Object.prototype);

// // a proto's proto bind to Object prototype
// console.log(a.__proto__.__proto__ == Object.prototype);


// // name is not binding to Object prototype
// console.log(a.__proto__.__proto__.hasOwnProperty("name"));

// // name is bind to Perosn via this not prototype
// console.log(a.__proto__.hasOwnProperty("name"));

// // hasOwnProperty to check if we have this property binding
// console.log(a.hasOwnProperty("name"));

// // country is binding to Person
// console.log(a.__proto__.hasOwnProperty("country"));



// function Book(name, pNum) {
//   this.name = name; // 書名
//   this.pNum = pNum; // 頁數
//   this.comment = null; // 評價
//   this.setComments = function(comment) {
//     this.comment = comment;
//   }
// }

// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// ydkjs_1.setComments('好書！');
// ydkjs_1.comment // "好書！"

// ydkjs_1.setComments === ydkjs_2.setComments // false



// function Book(name, pNum) {
//   this.name = name; // 書名
//   this.pNum = pNum; // 頁數
//   this.comment = null; // 評等
// }

// Book.prototype.setComments = function(comment) {
//   this.comment = comment;
// }

// var ydkjs_1 = new Book('導讀，型別與文法', 257);
// var ydkjs_2 = new Book('範疇與閉包 / this 與物件原型', 251);

// ydkjs_1.setComments('好書！');
// ydkjs_1.comment // "好書！"

// ydkjs_2.setComments('超好書！');
// ydkjs_2.comment // "超好書！"

// ydkjs_1.setComments === ydkjs_2.setComments // true，確認是同一個函式！



// a constructor function
// function Foo(y) {
//   this.y = y;
// }
 
// Foo.prototype.x = 10;
 
// Foo.prototype.calculate = function (z) {
//   return this.x + this.y + z;
// };

// var b = new Foo(20);
// var c = new Foo(30);
 
// b.calculate(30); // 60
// c.calculate(40); // 80
 
// console.log(
//   b.__proto__ === Foo.prototype, // true
//   c.__proto__ === Foo.prototype, // true
 
//   b.constructor === Foo, // true
//   c.constructor === Foo, // true
//   Foo.prototype.constructor === Foo, // true
 
//   b.calculate === b.__proto__.calculate, // true
//   b.__proto__.calculate === Foo.prototype.calculate // true
// );


// function Person(job) {
//   this.career = job;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hello, I am an ${this.career}`);
// };

// function CoolPerson(job) {
//   Person.apply(this, [job]);
// }

// CoolPerson.prototype = Object.create(Person.prototype);

// CoolPerson.prototype.sayLoveJob = function () {
//   this.sayHi();
//   console.log("I love my job!");
// };

// var jack = new CoolPerson("engineer");
// var apple = new CoolPerson("designer");

// jack.sayLoveJob();
// apple.sayLoveJob();


// Person = {
//   setCareer: function (career) {
//     this.career = career;
//   },
//   sayHi: function () {
//     console.log(`Hello, I am an ${this.career}`);
//   },
// };

// // 讓 CoolPerson 委派 Person
// CoolPerson = Object.create(Person); // 物件與物件間使用 `Object.create` 來建立連結

// CoolPerson.sayLoveJob = function () {
//   this.sayHi();
//   console.log("I love my job!");
// };

// var jack = Object.create(CoolPerson);
// jack.setCareer("engineer");

// var apple = Object.create(CoolPerson);
// apple.setCareer("designer");

// jack.sayLoveJob();
// apple.sayLoveJob();


var one = {x: 1};
var two = new Object();
one.__proto__ === Object.prototype // true
two.__proto__ === Object.prototype // true

one.toString === one.__proto__.toString // true