// // DRY -> Don't repeat yourself

// var human = {
//   name: "H",
//   surname: "F",
//   age: 34,
//   sayHi() {
//     return `Hello, my name is ${this.name} ${this.surname}, I'm ${this.age} y/o`;
//   },
// };

// console.log(human.sayHi());

// const person = {
//   name: "Hovhannes",
//   surname: "Kocharyan",
//   age: 28,
//   __proto__: human,
// };

// console.log(person.sayHi());

// context -> this

// 4 binding ways
// default binding

// let human = {
//   name: "H",
//   surname: "F",
//   age: 34,
//   sayHi() {
//     return `Hello, my name is ${this.name} ${this.surname}, I'm ${this.age} y/o`;
//   },
// };

// const foo = human.sayHi;

// console.log(foo()); // browser: window, node: global

// implicit binding

// let human = {
//   name: "H",
//   surname: "F",
//   age: 34,
//   sayHi() {
//     return `Hello, my name is ${this.name} ${this.surname}, I'm ${this.age} y/o`;
//   },
// };

// human.sayHi();

// const person = {
//   name: "Valod",
//   surname: "Kirakosyan",
//   age: 56,
//   foo: {
//     sayHi: human.sayHi,
//   },
// };

// explicit binding
// call, apply, bind

// const res = person.foo.sayHi.call(person, 1, 2, 3);
// const res2 = person.foo.sayHi.apply(person, [1, 2, 3]);
// const newSayHi = person.foo.sayHi.bind(person);

// console.log("res::: ", newSayHi(1, 2, 3));

// new keyword
// new Array()

// 1. create the new object
// 2. new object proto = constructor prototype
// 3. new object bind context
// 4. if type of returned value is reference than return returned data otherwise return new object

// function fakeNew(c, ...args) {
//   const newObject = {};
//   newObject.__proto__ = c.prototype;
//   const res = c.apply(newObject, args);

//   function isReferenceType(value) {
//     if (["object", "function"].includes(typeof value) && value !== null) {
//       return true;
//     } else if (Array.isArray(value)) {
//       return true;
//     }
//     return false;
//   }

//   return isReferenceType(res) ? res : newObject;
// }

// const arr = new Array(3);
// const arr2 = fakeNew(Array, 3);

// console.log("arr:::", arr);
// console.log("arr2:::", arr2);

// const Pagination = {
//   _book: [], // [[], [], [], []]
//   _currentPage: 0,

//   init(array = [], contentSize = 0) {
//     Pagination._book = array.reduce((acc, item, index) => {
//       if (index % contentSize === 0) {
//         acc.push([item]);
//       } else {
//         acc[acc.length - 1].push(item);
//       }
//       return acc;
//     }, []);
//   },

//   getPageItems() {
//     return Pagination._book[Pagination._currentPage];
//   },

//   nextPage() {
//     const currPage = Pagination._currentPage + 1;

//     if (currPage <= Pagination._book.length) Pagination._currentPage = currPage;

//     return Pagination;
//   },

//   prevPage() {
//     const currPage = Pagination._currentPage - 1;

//     if (currPage >= 0) Pagination._currentPage = currPage;

//     return Pagination;
//   },

//   firstPage() {
//     Pagination._currentPage = 0;
//   },

//   lastPage() {
//     Pagination._currentPage = Pagination.book.length - 1;
//   },

//   goToPage(page) {
//     if (page >= 0 && page <= Pagination._book.length)
//       Pagination._currentPage = page - 1;
//   },
// };

// Object.defineProperties(Pagination, {
//   _book: {
//     enumerable: false,
//   },
//   _currentPage: {
//     enumerable: false,
//   },
// });

// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

// Pagination.init(alphabetArray, 6);

// console.log(Pagination.getPageItems());

// Pagination.nextPage().nextPage();

// console.log(Pagination.getPageItems());

// Pagination.firstPage();

// console.log(Pagination.getPageItems());

// console.log(Pagination.nextPage().nextPage().prevPage().getPageItems());

// factory function

function foo() {
  return {};
}

// constructor function

function C(name) {
  this.name = name;

  return new String("abc");
}

C.prototype.method = function () {
  return 4;
};

const obj = new C("Hovhannes");
// const obj2 = new C("Hakob");

console.log(obj);
// console.log(obj2);
