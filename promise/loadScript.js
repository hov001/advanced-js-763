// function loadScript(src, callback) {
//   const script = document.createElement("script");
//   script.src = src;

//   const head = document.querySelector("head");

//   script.onload = () => callback(script);
//   script.onerror = () => callback(null, "error!!!");

//   head.insertAdjacentElement("beforeend", script);
// }

// // callback hell
// loadScript("./scripts/script.js", (_, reject) => {
//   if (reject) {
//     throw Error(reject);
//   } else {
//     loadScript("./scripts/script2.js", (_, reject) => {
//       if (reject) {
//         throw Error(reject);
//       } else {
//         loadScript("./scripts/script3.js", (_, reject) => {
//           if (reject) {
//             throw Error(reject);
//           }
//         });
//       }
//     });
//   }
// });

// Promise

// status: pending, fulfilled, rejected;
// value: undefined, res value, reject value

// function loadScript(src) {
//   const script = document.createElement("script");
//   script.src = src;

//   script.defer = true;

//   const head = document.querySelector("head");

//   const fileName = src.split("/").pop();

//   return new Promise((resolve, reject) => {
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(`failed load of ${fileName}!!!`);

//     head.insertAdjacentElement("beforeend", script);
//   });
// }

// loadScript("./scripts/script.js")
//   .then(() => {
//     return loadScript("./scripts/script2.js");
//   })
//   .then(() => {
//     return loadScript("./scripts/script3.js");
//   })
//   .then(() => {});

// const promise = new Promise((resolve, reject) => {
//   resolve(5);
// });

// promise.then((res) => {
// console.log(res)

// return 6
// })

// promise.then((res) => {
// console.log(res)
// })

// promise
//   .then((res) => {
//     console.log(res);

//     return 6;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// promise
//   .then(
//     (result) => {
//       console.log("result::", result);

//       return 4;
//     },
//     () => {
//       return "5";
//     }
//   )
//   .then((a) => {
//     throw Error("error");
//   }, () => {})
//   .catch((b) => {
//     console.log("catch:::", b);
//   });

// then, catch, finally

// console.log(promise);

// console.log(1);

// const a = 10;

// setTimeout(() => {
//   console.log(2);
// }, 100);

// const promise = new Promise((_, rej) => {
//   console.log(3);

//   rej(4);
// });

// promise.then(
//   (res) => {
//     console.log(res + 1);
//   },
//   (res) => {
//     console.log(res + 2);
//   }
// );

// setTimeout(() => {
//   console.log(7);
// });

// console.log(8);

// promise.then(() => {
//   console.log(9);
// });

// console.log(a);

const is = false;
const res = {
  ...is,
};

console.log(res);
