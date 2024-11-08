const root = document.getElementById("root");

const res = document.getElementById("hello");
// const res = document.querySelector('#hello')

let counter = 0;

res.addEventListener("click", () => {
  const p = document.createElement("p");

  p.textContent = "<hello></hello>";

  root.insertAdjacentElement("beforeend", p);
});

// const paragraphs = [...document.getElementsByClassName("bye")];
// const paragraphs2 = document.querySelectorAll(".bye");

console.log(paragraphs);

// console.log(paragraphs2);

// for (const p of paragraphs) {
//   console.log(p);
// }

// const res = document.querySelector('#hello')

// res.addEventListener('')
