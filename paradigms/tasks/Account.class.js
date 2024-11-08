class Account {
  static #id = 0;
  _id;
  _name;
  _balance;
  constructor(name, balance) {
    this._id = Account.#id;
    Account.#id += 1;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "string" && value.length >= 4) {
      this._name = value;
    }
  }

  get balance() {
    return this._balance;
  }

  #isValidAmount(amount) {
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
  }

  credit(amount) {
    if (this.#isValidAmount(amount)) {
      this._balance += amount;
    }

    return this._balance;
  }

  debit(amount) {
    if (this.#isValidAmount(amount) && amount <= this._balance) {
      this._balance -= amount;

      return this._balance;
    }

    return "Amount exceeded balance.";
  }

  transferTo(anotherAccount, amount) {
    if (anotherAccount instanceof Account) {
      const result = this.debit(amount);
      if (typeof result === "number") {
        anotherAccount.credit(amount);

        return this._balance;
      } else {
        return result;
      }
    }
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance);
console.log(cardAcc.balance);

console.log(savingAcc.transferTo(cardAcc, 1000));
console.log(cardAcc.balance);
