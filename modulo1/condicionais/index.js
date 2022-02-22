/* Interpretação 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}       //a . o código calcula se o numero é divisivel por 2, se for ele passa no teste, senão não passa
        //b . números pares passam no teste
        //c . números impares não passam no teste
*/
/* Interpretação 2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) //a . o codigo verifica o preço do da fruta
    //b. O preço da fruta maçã é R$ 2.25
    //c. o programa irá imprimir a frase no console duas vezes, com o valor da Pêra e o valor 5
*/

/* Interpretação 3
const numero = Number(prompt("Digite o primeiro número."))     //a . esta pedindo que um numero seja inserido, e transformando em Number para evitar erros com string

if(numero > 0) {        //b . todo numero maior que zero ira imprimir a mensagem que passau no teste, menores que zero não imprimem nada
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) //c . a varivel mensagem não pode ser acessada de fora do if, pois não tem retorno nenhum
*/

/* Escrita 1
let idade = Number(prompt(`Qual a sua idade?`))
if (idade>=18){
    console.log(`Você pode dirigir`)
}else{
    console.log(`Você não pode dirigir`)
}*/

/* Escrita 2
let verifica = prompt("Digite M, V ou N, se você estuda no turno matutino, vespertino ou noturno")
if(verifica==="M"){
    console.log("Bom dia!");
} else if(verifica==="V"){
    console.log("Boa tarde!");
} else if(verifica==="N"){
    console.log("Boa noite!");
}*/

/* Escrita 3
let verifica = prompt("Digite M, V ou N, se você estuda no turno matutino, vespertino ou noturno")
switch(verifica){
    case "M":
    console.log("Bom dia!")
    break;
    case "V":
    console.log("Boa tarde!")
    break;
    case "N":
    console.log("Boa noite!")
    break;
}*/
/* Escrita 4
let genero = prompt("Qual o genero de filme que você quer ver?")
let preco = Number(prompt("Qual o preço do ingresso?"))
if (genero==="fantasia"&&preco<15){
    console.log("Bom filme!");
} else{
    console.log("Escolha outro filme :(");
}*/

/* Desafio 1
let genero = prompt("Qual o genero de filme que você quer ver?")
let preco = Number(prompt("Qual o preço do ingresso?"))
if (genero==="fantasia"&&preco<15){
    let lanchinho = prompt("Qual lanche gostaria de comprar?")
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${lanchinho}!`);
} else{
    console.log("Escolha outro filme :(");
}*/