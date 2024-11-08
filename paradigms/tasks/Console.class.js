class Console {
  #name;
  #histories = [];
  constructor(name) {
    this.#name = name;
  }

  log(firstItem, ...tail) {
    let res = `${this.#name}: ${firstItem}, ${tail.join(", ")}`;

    if (Array.isArray(firstItem)) {
      res = `${this.#name}: [${firstItem.join(", ")}]`;
    } else if (firstItem instanceof Object && firstItem !== null) {
      let data = "";

      for (const key in firstItem) {
        data += `${key}: ${firstItem[key]}, `;
      }

      res = `${this.#name}: { ${data} }`;
    } else if (typeof firstItem === "string" && tail.length) {
      res = `${firstItem}: [${tail.join(", ")}]`;
    }

    this.#histories.push(res);

    console.log(res);
  }

  history(start = 0, end = this.#histories.length) {
    return this.#histories.slice(start, end);
  }

  clearHistory() {
    const isCleared = !!this.#histories.length;

    if (isCleared) this.#histories = [];

    return isCleared;
  }
}

const myConsole = new Console("Regular");
const flanConsole = new Console("Flan");

myConsole.log([4, 5, 6, 8]);

console.log(flanConsole.history());

flanConsole.log("bla", 5, 6, 7, 8);

console.log(flanConsole.history());

flanConsole.log({ name: "h", age: 23 });

console.log(flanConsole.history(1));

myConsole.log(flanConsole.clearHistory());
myConsole.log(flanConsole.clearHistory());
