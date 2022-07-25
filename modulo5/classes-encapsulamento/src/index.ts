import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }

// 1.
// a) O construtor é uma função que nos permite definir algumas caracteristicas como, se os dados seram inseridos pelo usuario ou se ja estaram com algum padrão definido inicialmente, como saldo zero em uma conta de banco.
// Exemplo de uso:
// constructor(
//     cpf: string,
//     name: string,
//     age: number,
// )

// b)

class UserAccount {
    private cpf: string
    private name: string
    private age: number
    private balance: number = 0
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf():string {
        return this.cpf
    }
    public getName():string {
        return this.name
    }
    public getAge():number {
        return this.age
    }
    public getBalance():number {
        return this.balance
    }
    public getTransactions():Transaction[] {
        return this.transactions
    }
    public setTransactions(newTransaction:Transaction) {
       this.transactions = [...this.transactions, newTransaction]
    }
  
}

const user1:UserAccount = new UserAccount("0151452562","josé",65)
console.log(user1)

// Mensagem "Chamando o construtor da classe UserAccount" foi impressa uma vez no terminal.

// c) Com métodos de Get e Set, podendo ser acessado apenas internamente na classe.

// 2.

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ){
        this.description = description
        this.value = value
        this.date = date
     }

    public getDescription():string {
        return this.description
    }
    public getValue():number {
        return this.value
    }
    public getDate():string {
        return this.date
    }
}

const transaction1:Transaction = new Transaction("Conta de luz",65, "25/03/2022")
user1.setTransactions(transaction1)
console.log(user1.getTransactions())

// 3.

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    
    public getAccounts = () => {
        return this.accounts
    }
    public setAccounts = (newAccount:UserAccount) => {
        this.accounts = [...this.accounts, newAccount]
    }
}