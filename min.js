class BankAccount{
    constructor(balance){
        this._balance =balance;
    }
    deposit(Amount){
        if(Amount > 0){
            this._balance += Amount;
        }
    }
    withdraw(Amount){
        if(Amount >0  && Amount <= this._balance){
            this._balance -= Amount;
        }
    }
    get balance(){
        return this._balance;
    }
}
let  personX = new BankAccount(5000);

let  depositcash =personX.deposit(4000);
personX.withdraw(8000);

console.log(personX.balance)

//this is the bank  deposite withdraw  and balance check
