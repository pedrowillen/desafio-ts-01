import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioPlusAccount } from './class/DioPlusAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
// console.log(peopleAccount);
// peopleAccount.deposit(75);
// peopleAccount.withdraw(23);

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount);
// companyAccount.deposit(500);
// companyAccount.getLoan(5000);

const peoplePlusAccount: DioPlusAccount = new DioPlusAccount('Pedro', 35);
console.log(peoplePlusAccount);
peoplePlusAccount.deposit(100);