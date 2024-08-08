import { DioAccount } from "./DioAccount";

export class DioPlusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);

        this.deposit = (value: number): void => {
            if (this.validateStatus() && value > 0) {
                this.balance += value + 10;
                console.log(`Depositado R$${value} + bônus de R$10,00. Saldo atual: ${this.getBalance()}`)
            }
        }
    }
}