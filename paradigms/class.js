// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   return this.name + " " + this.surname;
// };

// const person = new Person("Hovhannes", "Kocharyan", 28);

// console.log(person);

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }

//   #hello() {
//     return "hello";
//   }

//   hello2() {
//     return this.#hello();
//   }

//   static sayHi(instance) {
//     return instance.name + " " + instance.surname;
//   }
// }

// const person = new Person("Hovhannes", "Kocharyan", 28);

// console.log(person.hello2());

// class Person {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// class Baby extends Person {
//   constructor(name, surname, age, hasToys) {
//     super(name, surname, age);
//     this.hasToys = hasToys;
//   }
// }

// const res = new Baby("Hakobik", "Samsonyan", 2, true);

// console.log(res);

// function Baby(name, surname, age, hasToys) {
//   Person.call(this, name, surname, age);
//   this.hasToys = hasToys;
// }

// Baby.prototype = Object.create(Person.prototype);

// class Person {
//   constructor() {}

//   sayHi() {
//     return "a";
//   }
// }

// function fakeNew(C, ...args) {
//   const obj = Object.create(C.prototype);

//   const res = C.apply(obj, args);

//   return obj;
// }

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   return "hello";
// };

// const person = new Person("Hamo");

// console.log(person); // { name: 'bla' }

// i++ vs ++i

// let i = 8

// let j = i++

// console.log(j, i) // 9, 9

// let count = 9;

// const counter = {
//   count: 0,
//   add: function () {
//     this.count++;
//   },
// };

// counter.add();
// console.log(counter.count);
// const addToCount = counter.add;
// addToCount();
// console.log(counter.count);

const person = {
  name: "ACA",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

const hello = person.hello;
const helloFunc = person.hello.bind({ name: "AUA" });
helloFunc("world"); // 'AUA say hello world'
const helloFunc1 = hello.bind({ name: "YSU" });
helloFunc1("to you"); // 'YSU says hello to you
const helloFunc2 = helloFunc.bind({ name: "NPUA" });
helloFunc2("everyone"); // 'AUA says hello everyone'
