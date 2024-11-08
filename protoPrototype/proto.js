// const human = {
//   isHuman: true,
// };

// const person = {
//   name: "John",
//   age: 20,
//   isHuman: false,
//   __proto__: human,
// };

// const troll = {
//   __proto__: human,
// };

// console.log(person.isHuman); // false
// console.log(troll.isHuman); // true

// array.__proto__ = [1, 2, 3]

// const array = [1, 2, 3];

// console.log(array.map(() => {})); // 5

// console.log([].__proto__ === Array.prototype);
// console.log([1, 2].__proto__ === Array.prototype);
// console.log([1, 2, 3].__proto__ === Array.prototype);
// console.log([1, 2, 3, 4].__proto__ === Array.prototype);

// const str = "abc"; // __proto__: String.prototype -> String.prototype.__proto__: Object.prototype
// const array = []; // __proto__: Array.prototype -> Array.prototype.__proto__: Object.prototype

// console.log("aaa", Array.__proto__ === Function.prototype); // true

// const str = '';

// str.__proto__ = Array.prototype;

// console.log(str.map((item) => item)); //

// const object = {
//   0: "h",
//   1: "e",
//   2: "l",
//   3: "l",
//   4: "0",
//   length: 5,
// };

// object.__proto__ = Array.prototype;

// const res = object.reduce((acc, item) => acc + item + ", ", "");

// console.log("res:::", res);

const human = {
  isHuman: true,
};

const person = {
  name: "John",
  age: 20,
};

// console.log(person.hasOwnProperty('isHuman'))
// console.log("isHuman" in person); // true

// console.log(person.__proto__);

// Object.setPrototypeOf(person, human); // person.__proto__ = human

// console.log(person.__proto__);
