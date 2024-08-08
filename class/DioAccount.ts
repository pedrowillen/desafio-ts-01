export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): string => {
    if(Number.isInteger(this.balance)) {
      return `R$${this.balance}.00`
    } else {
      return `R$${this.balance}`
    }
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
        this.balance += value;
        console.log(`Depositado R$${value}. Saldo atual: ${this.getBalance()}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value ) {
      this.balance -= value;
      console.log(`Sacado R$${value}. Saldo atual: ${this.getBalance()}`);
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
