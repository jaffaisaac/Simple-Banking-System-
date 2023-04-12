class BankAccount {
  constructor(balance) {
    this._balance = balance;
    this._transactionHistory = [];
  }
  deposit(Amount) {
    if (Amount > 0) {
      this._balance += Amount;
      this._transactionHistory.push(`Deposited ${Amount}`);
    }
  }
  withdraw(Amount) {
    if (Amount > 0 && Amount <= this._balance) {
      this._balance -= Amount;
      this._transactionHistory.push(`Withdrew ${Amount}`);
    }
  }
  get balance() {
    return this._balance;
  }
  get transactionHistory() {
    return this._transactionHistory;
  }
}
let personX = new BankAccount(5000);

personX.deposit(4000);
console.log(personX.balance);
personX.withdraw(8000);
console.log(personX.balance);
console.log(personX.transactionHistory);

//this is the bank  deposite withdraw  and balance check
