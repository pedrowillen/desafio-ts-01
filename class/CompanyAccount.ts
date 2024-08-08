import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus() && value > 0) {
      this.balance += value;
      console.log(`Empréstimo de R$${value} realizado. Saldo atual: ${this.getBalance()}`);
    }
  }
}
