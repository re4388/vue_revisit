class P {
  foo() {
    console.log("P.foo");
  }
}

class C extends P {
  foo() {
    super.foo();
  }
}

var c1 = new C();
c1.foo(); // "P.foo"

var D = {
  foo: function () {
    console.log("D.foo");
  },
};

var E = {
  foo: C.prototype.foo,
};

Object.setPrototypeOf(E, D); // 將 E 連結到 D 以進行委派

E.foo(); // "P.foo"
