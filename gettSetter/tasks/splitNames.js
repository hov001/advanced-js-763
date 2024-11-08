// const object = {
//   _name: [],

//   get name() {
//     return object._name;
//   },
//   set name(value) {
//     if (typeof value === "string") {
//       object._name = value.split(", ").map((name) => [name, name.length]); // ["Hovhannes", Hakob", "Karen"]
//     }
//   },
// };

// console.log(Object.getOwnPropertyDescriptor(object, "_name"));

// Object.defineProperty(object, "name", {
//   writable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(object, "_name"));

// object.name = "Hovhannes, Hakob, Karen";
// console.log(object.name); // [['Hovhannes', 9], ['Hakob', 5], ['Karen 5']]

// console.log(Object.keys(object)); // ['_name', 'name']

// function isValidNumber(value) {
//   if (typeof value !== "number" || Number.isNaN(value)) {
//     return false;
//   }

//   return true;
// }

// function sumFunc(num = 0) {
//   return function (num2) {
//     if (isValidNumber(num) && isValidNumber(num2)) {
//       return num + num2;
//     }

//     return "invalid input";
//   };
// }

// const addOne = sumFunc("1");
// const addTwo = sumFunc(2);
// const addTen = sumFunc(10);

// console.log(sumFunc(1)(2));

// n

// function isIsogram(sentence = "") {
//   const excludedChars = [" ", ",", "."]; // tuples

//   Object.preventExtensions(excludedChars);

//   const letters = {};

//   for (const char of sentence) {
//     const lowerCase = char.toLowerCase();
//     if (letters.hasOwnProperty(lowerCase) && !excludedChars.includes(lowerCase))
//       return false;
//     else letters[lowerCase] = true;
//   }

//   return true;
// }

// console.log(isIsogram("heloo"));

// let a = 5;

// console.log(a);

// // a

// // a

// a = 6;

// const a = 5;

// console.log(a);

// a = 6;

// cns bg = 5

// const number = 5;

// console.log(nmber); // ReferenceError: nmber is not defined

// const hel = "hello";

// String.prototype.map = () => 5;

// console.log(hel.map());

// RAM -> 0,1 -> 1 bit -> 1 bite -> 8 bit -> 1 kb -> 1024 bite
// 64 bit or 32 bit -> x64, x32

// 0x64 -> 0
// 0x62, 1x1 -> 1 // 0000000....011 -> 2^64
// 1 bit -> sign , 11 bit -> precision, 53 bit -> integer

// MAX_SAFE_INTEGER = (2^53) - 1
// BigInt -> 1n -> 128 bit

// const array = []; // number

// 2^32 - 1

// for (;;) {}

// array.length = Math.pow(2, 32);

// console.log(array.length); // 0
// console.log(typeof array.length); // 0
