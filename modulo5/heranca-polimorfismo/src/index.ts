import { Client } from "./Client"
import { Customer } from "./Custumer"
import { Place } from "./Place"
import { Residence } from "./Residence"
import { User } from "./User"

console.log("Hello, world!")

const user1:User = new User("012345","email@mail.com","Drake","789456")
// console.log(user1.getEmail())
// console.log(user1.getName())
// console.log(user1.getId())

// Herança

// 1.
// a) Sim, mas pra isso seria necessario criar um get dentro da classe.
// b) Uma vez

const customer1:Customer = new Customer("gfdsfadsffa","mail@boll.com","Josh","4562897","crebito")
// console.log(customer1.getCreditCard())

// 2.
// a) Uma vez.
// b) Duas vezes, por que uma vez é chamada no pai e outra no filho

// console.log(customer1.getCreditCard())
// console.log(customer1.getEmail())
// console.log(customer1.getId())
// console.log(customer1.getName())
// console.log(customer1.purchaseTotal)

// 3
// a) Sim, mas pra isso seria necessario criar um get dentro da classe pai, User.

// 4.
// console.log(customer1.interoduceYourself())

// 5.
// console.log(customer1.interoduceYourself())

// Polimorfismo

// 1.

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
}

// console.log(client.calculateBill())
// console.log(client.consumedEnergy)
// console.log(client.name)
// console.log(client.registrationNumber)

// a) Foi possivel imprimir todas as propriedades, pois nenhuma foi definida como privada na interface, por não haver definição se tornaram publicas por padrão.


// 2.
// const place:Place = new Place()

// a) Não é possível criar uma instância de uma classe abstrata.
// b) Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// 3.

const residente1:Place = new Residence(5,"147852")
const commerce1:Place = new Residence(3,"658921")
const industry1:Place = new Residence(8,"362179")

// 4.

// 5.
// a) Quase todas as propriedades são iguais e um dos métodos também
// b) Poucas propriedades são diferentes, e apenas um dos metodos é diferente

// 6. 
// a) da classe Industry, por que tem as propriedades basicas necessarias para ela.
// b) a interface Client, pois as industrias também são clientes da concessionaria de luz
// c) por que as informações foram criadas apenas para serem lidas e não editadas
