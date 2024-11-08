// 1. Imperative
const array = [1, 2, 3, 4];

// const newArray = []

// for(let idx = 0; idx < array.length; idx++) {
//   newArray[idx] = array[idx] * 2
// }

const newArray2 = array.map((item) => item * 2);

// 2. Declarative -> Functional
const sentence = "ahahaha";

const res = sentence.split("").reverse().join("");

// 3. Object-oriented Programming
// 3.1. Inheritance
// 3.2. Encapsulation
// 3.3. Abstraction
// 3.4. Polymorphism
// 3.4.1. Ad-hoc
// 4 + 5 // 9
// '4' + '5' // 45
// 3.4.2. Parametric
// 5 - 4 // 1
// '5' - 4 // 1
// 5 - '4' // 1
// '5' - '4' // 1
// 3.4.3. Subtypes
// function isPrimitiveType(value) {
//   const primitiveTypes = ['string', 'number', 'boolean', 'undefined']

//   return primitiveTypes.includes(typeof value)
// }

// function getResult(a, b) {
//   if(isPrimitiveType(a) || isPrimitiveType(b)) return a + b
//   else if(Array.isArray(a) && Array.isArray(b)) return a.concat(b)
//   else return {...a, ...b}
// }

// Multi-paradigm
