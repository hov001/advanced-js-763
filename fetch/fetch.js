const root = document.getElementById("root");

const obj = {
  id: 1,
  name: "Hovhannes",
  age: 28,
  hasChild: true,
  a: undefined,
  foo() {
    return "bla bla";
  },
};

const stringJSON = '{"id":1,"name":"Hovhannes","age":28,"hasChild":true}';

// console.log("aaa:::", JSON.stringify(obj));

// console.log("bbb:::", JSON.parse(stringJSON));

function createChild(root, { title, body }) {
  const headline = document.createElement("h2");
  const paragraph = document.createElement("p");

  headline.textContent = title;
  paragraph.textContent = body;

  root.insertAdjacentElement("afterbegin", headline);
  root.insertAdjacentElement("afterbegin", paragraph);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw Error("your have an error. Please try again!!!");
    }
  })
  .then((res) => {
    res.forEach((data) => createChild(root, data));
  })
  .catch((err) =>
    createChild(root, {
      title: err.message,
    })
  );
