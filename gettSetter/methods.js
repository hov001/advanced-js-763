// const object = {
//   get name() {
//     return `${object._name} ${object._surname}`;
//   },
//   set name(value) {
//     if (value.length >= 4) object._name = value;
//   },
// };

// Object.seal(object) //

// Object.defineProperties(object, {
//   _name: {
//     value: "Hovhannes",
//     writable: true,
//     configurable: true,
//   },
//   _surname: {
//     value: "Kocharyan",
//     writable: true,
//     configurable: true,
//   },
// });

// console.log(Object.keys(object));

// getter and setter

// console.log(object.name); // Karen Karenyan

// object.name = ""; // length >= 4

// console.log(object.name); // Hello Karenyan

// Object.defineProperty(object, "_name", {
//   value: "Hovhannes",
//   writable: true,
//   configurable: false,
// });

// code

// console.log(object);

// object.name = "Samson";

// const isString = (string) => typeof string === "string";

// function sentence(sentence = "") {
//   if (!isString(sentence)) {
//     throw new Error("your parameter must be string");
//   }

//   return sentence;
// }

// console.log(sentence(5));

// console.log("a");

// try {
//   const a = 5;

//   a = 6;
// } catch ({ name, message }) {
//   console.log("aaa", { name, message });
// } finally {
//   console.log("finally");
// }

// console.log("working");

function getTwoOldestNumbers(numbers = []) {
  if (numbers.length <= 2) return numbers;

  return numbers.reduce(
    (acc, value) => {
      if (value > acc[1]) acc[1] = value;
      else if (value > acc[0]) acc[0] = value;

      return acc;
    },
    [-Infinity, -Infinity]
  );

  // const [oldest, secondOldest] = [...numbers].sort((a, b) => b - a);

  // return [secondOldest, oldest];
}

const arr = [8, 2, 5, 3, 1, 4, 5];

console.log(getTwoOldestNumbers(arr));

console.log(arr);

arr.filter((item, idx) => arr.indexOf(item) === idx);

function getAvg(people = []) {
  const sumOfAge = people.reduce((acc, { age }) => acc + (age ?? 0), 0);

  return sumOfAge / people.length;
}
