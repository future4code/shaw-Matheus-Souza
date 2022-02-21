
/* Interpretação 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])            // Será impresso: Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])  //Será impresso: 4
console.log(filme.transmissoesHoje[2])  //Será impresso: Telecine 21h
*/

/* Interpretação 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}       // os ... servem para copiar a estrutura base de um objeto

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)   //Será impresso: Juca 3 SRD
console.log(gato)       //Será impresso: Juba 3 SRD
console.log(tartaruga)  //Será impresso: Jubo 3 SRD
*/

/* Interpretação 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))       //Será impresso: false
console.log(minhaFuncao(pessoa, "altura"))          //Será impresso undefined, pois não foi definida dentro do objeto pessoa
*/

/* Escrita 1
const pessoa = {
    nome: "Marione",
    apelidos: ["Mari", "Marizinha", "Marizoca"]
}
function essaPessoa(nome, apelido){
    console.log(`Eu sou ${nome}, mas pode me chamar de ${apelido}`);
}
essaPessoa(pessoa.nome,pessoa.apelidos)

const outraPessoa = {
    ...pessoa,
    apelidos: ["Marisvalda", "Mario", "Tainara"]
}
essaPessoa(outraPessoa.nome,outraPessoa.apelidos)
*/

/* Escrita 2
const pessoa1 = {
    nome: "Matheus",
    idade: 29,
    profissao: "Estudante"
}
const pessoa2 = {
    nome: "Marione",
    idade: 27,
    profissao: "Estudante"
}
function arrayPessoa(pessoa){
    const array = [pessoa.nome,pessoa.nome.length,pessoa.idade,pessoa.profissao,pessoa.profissao.length]
    return array
}
console.log(arrayPessoa(pessoa1))
console.log(arrayPessoa(pessoa2))
*/

/* Escrita 3
let carrinho = []
const fruta1 = {
    fruta: "Pêra",
    disponivel: true
}
const fruta2 = {...fruta1,fruta:"Uva"}
const fruta3 = {...fruta1,fruta:"Maçã"}
function compras(f1,f2,f3){
    carrinho.push(f1,f2,f3)
    console.log(carrinho)
    return carrinho
}
compras(fruta1,fruta2,fruta3)
*/
