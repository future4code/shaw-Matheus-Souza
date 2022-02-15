/* Interpretação 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)               //será impresso: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)               //será impresso: b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)               //será impresso: c. true

console.log("d. ", typeof resultado)        //será impresso: d. boolean
*/

/* Interpretação 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)       // seram empressos os numeros digitados, um após o outro pois estão em string
*/

/* Interpretaçaõ 3
let primeiroNumero = prompt ("Digite um número")
let segundoNumero = prompt ("Digite outro número")
let primeiroConvert = Number (primeiroNumero)
let segundoConvert = Number (segundoNumero)
console.log ("O primeiro número somado ao segundo número resulta em:",primeiroConvert+segundoConvert)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:",primeiroConvert*segundoConvert)
*/

/* Escrita 1
let minhaIdade = prompt("Digite sua idade.")
let idadeAmigo = prompt("Digite a idade de seu/sua. melhor amigo/a")
console.log("Sua idade é maior do que a do seu/sua melhor amigo/a?", minhaIdade>idadeAmigo)
console.log("A diferença de suas idades é de",minhaIdade-idadeAmigo)
*/

/* Escrita 2
let numeroPar = prompt("Digite um numero par")
let convertNumero = Number (numeroPar)
console.log ("A sobra da divisão desse número por 2 é:", convertNumero%2)
// Todo número par dividido por 2 terá 0 como sobra
// Quando um numero impar é digitado ira mostra 1 como sobra
*/

/* Escrita 3
let suaIdade = prompt("Quantos anos você tem?")
let idadeNumero = Number (suaIdade)
console.log ("Você tem",idadeNumero*12,"meses de vida")
console.log ("Você tem",idadeNumero*365,"dias de vida")
console.log ("Você tem",idadeNumero*8760,"horas de vida")
*/

/* Escrita 4
let primeiroNumero = prompt ("Digite um número")
let segundoNumero = prompt ("Digite outro número")
let primeiroConvert = Number (primeiroNumero)
let segundoConvert = Number (segundoNumero)
let divisaoUm = primeiroConvert % segundoConvert
let divisaoDois = segundoConvert % primeiroConvert
console.log ("O primeiro número é maior que o segundo?", primeiroConvert > segundoConvert)
console.log ("O primeiro número é igual ao segundo?", primeiroConvert === segundoConvert)
console.log ("O primeiro número é divisível pelo segundo?", divisaoUm === 0)
console.log ("O segundo número é divisível pelo primeiro?", divisaoDois === 0)
*/
