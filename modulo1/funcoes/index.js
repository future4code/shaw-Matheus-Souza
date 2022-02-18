
/* Interpretação 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))     // a. imprime 10
console.log(minhaFuncao(10))    // a. imprime 50
// b. nada seria impresso
*/

/* Interpretação 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)       // A função irá deixar o texto em letras minusculas, 
                            // verificar se há a palavra cenoura no texto, no fim isso tudo será impresso no console
// i . eu gosto de cenoura true
// ii . cenoura é bom pra vista true
// iii . cenouras crescem na terra false
*/

/* Escrita 1
a.
function imprimeOla(){
    console.log("Eu sou Matheus, tenho 29 anos, moro em Porto Alegre e sou estudante.");
}
imprimeOla()

b.
let nome = prompt ("Digite seu nome.")
let idade = prompt ("Digite sua idade.")
let endereco = prompt ("Qual cidade você mora?")
let ocupacao = prompt ("Qual sua ocupação?")

function imprimeSeuOla(n1, n2, n3, n4){
    console.log(`Eu sou ${n1}, tenho ${n2} anos, moro em ${n3} e sou ${n4}.`);
}
imprimeSeuOla(nome, idade, endereco, ocupacao)
*/

/* Escrita 2
a.
function somar (n1,n2){
    const soma = n1+n2 
    console.log(soma);
    return somar
}
somar(2,5)
somar(2,10)
b.
function comparar (n1,n2){
    const comparacao = n1>=n2
    console.log(`${n1} é maior que ${n2}? ${comparacao}`);
    return comparar
}
comparar(10,6)
comparar(3,6)
c.
function parImpar (n1){
    const divisao = n1%2
    console.log(`${n1} é par? ${divisao===0}`);
    return parImpar
}
parImpar(8)
parImpar(27)
d.
function fraseCaps (frase){
    console.log(frase.length, frase.toUpperCase());
}
fraseCaps("Hoje o dia esta lindo")
fraseCaps("amanha irá chover")
*/

/* Escrita 3
function calcular (n1,n2){
    const convertNum1 = Number (n1)
    const convertNum2 = Number (n2)
    const adicao = (convertNum1+convertNum2)
    const diferenca = convertNum1-convertNum2
    const multi = convertNum1*convertNum2
    const divi = convertNum1/convertNum2
    console.log(`Números inseridos: ${n1} e ${n2}`);
    console.log(`Soma: ${adicao}`);
    console.log(`Diferença: ${diferenca}`);
    console.log(`Multiplicação: ${multi}`);
    console.log(`Divisão: ${divi}`);
    return calcular
}

let primeiroNum = prompt ("Digite um número.")
let segundoNum = prompt ("Digite outro número.")
calcular(primeiroNum,segundoNum)
*/