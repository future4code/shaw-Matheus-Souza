/* Interpretação 1
let array
console.log('a. ', array)       // Irá imprimir: a. undefined

array = null
console.log('b. ', array)       // Irá imprimir: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)        // Irá imprimir: c. 11

let i = 0
console.log('d. ', array[i])            // Irá imprimir: d. 0

array[i+1] = 19
console.log('e. ', array)       // Não sei oque irá imprimir

const valor = array[i+6]
console.log('f. ', valor)       // Irá imprimir: f. 6
*/

/* Interpretação 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Será impresso: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/


/* Escrita 1
let email = prompt("Digite seu email.")
let nome = prompt("Digite seu nome.")
console.log (`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(a) ${nome}!`)
*/

/* Escrita 2
const comidas = ["sushi", "lasanha", 'churrasco', 'maionese', 'hamburguer']
console.log (comidas)
console.log ("Essas são as minhas comidas preferidas:")
console.log (comidas[0])
console.log (comidas[1])
console.log (comidas[2])
console.log (comidas[3])
console.log (comidas[4])
let novaComida = prompt ("Digite sua comida favorita")
comidas[1] = novaComida
console.log ("Agora essas são as minhas comidas preferidas:")
console.log (comidas[0])
console.log (comidas[1])
console.log (comidas[2])
console.log (comidas[3])
console.log (comidas[4])
*/

/* Escrita 3
const listaDeTarefas = []
let tarefaUm = prompt ("Digite uma tarefa para a manhã.")
let tarefaDois = prompt ("Digite uma tarefa para a tarde.")
let tarefaTres = prompt ("Digite uma tarefa para a noite.")
listaDeTarefas[0] = tarefaUm
listaDeTarefas[1] = tarefaDois
listaDeTarefas[2] = tarefaTres
console.log (`Hoje você precisa: ${listaDeTarefas}`)
let tarefaFeita = prompt ("Qual tarefa você já fez? 1, 2 ou 3?")
listaDeTarefas.splice (tarefaFeita-1, 1)
console.log (`Agora só falta: ${listaDeTarefas}`)
*/
