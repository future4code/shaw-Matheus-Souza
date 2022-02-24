/* Interpretação 1
let valor = 0       // o código esta encrementando a variavel valor, enquanto ela for menor que 5
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)      // será impresso 5 no console
*/

/* Interpretação 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)     //a. não será impresso nada, pois o array não tem 18 elementos
	}   //b. pode ser dito ao console para imprimir numero se ele for <= ao length da lista
} */

/* Interpretação 3
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}   // será impresso: *
    //                **
    //                ***
    //                ****
*/

/* Escrita 1
const bixos = Number(prompt("Quantos Pets você tem?"))
let quantia = 0
listaPet = []
while(quantia<bixos){
  if(bixos===0){
  console.log("Que pena! Você pode adotar um pet!")
  } else{
    const nome = prompt("Diga o nome do seu pet")
    listaPet.push(nome)
  }
  quantia++ 
} 
console.log(listaPet);
*/

/* Escrita 2
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function listar (array){
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}
listar(arrayOriginal)

function divididos (array){
 for (let i = 0; i < array.length; i++) {
    let div= array[i]/10
    console.log(div);
 }
}
divididos(arrayOriginal)

function pares (array){
  const arrayPar = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0){
      arrayPar.push(array[i])
    }
  }
  console.log(arrayPar);
}
pares(arrayOriginal)

function listaEscrita (array){
  for (let i = 0; i < array.length; i++) {
    console.log(`O elemento do index ${i} é: ${array[i]}`);
  }
}
listaEscrita(arrayOriginal)

function maiorMenor (array){
  let maior = 0
  let menor = 0
  let grande = 0
  let pequeno = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i]>0){
      grande = array[i]
    }
    if(grande>maior){
      maior=grande
    }
  }
  menor = maior
  for (let i = 0; i < array.length; i++){
         pequeno = array[i]
    if(pequeno<menor){
      menor=pequeno
    }
  }     
console.log(`O maior número é ${maior} e o menor é ${menor}`);
}
maiorMenor(arrayOriginal)
*/