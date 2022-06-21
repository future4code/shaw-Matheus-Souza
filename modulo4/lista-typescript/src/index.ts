//escreva o seu código aqui

// 1

let nome:string = "Jimmy"
let data:string = "24/04/1993"

const conversorData = (data:string) => { //a data originalmente vem muito extensa
    const dia = data.substring(0, 2) //então pegamos esse valor e 
    const mes = data.substring(3, 5) //cortamos oque vem antes e depois 
    const ano = data.substring(6, 12) //dos valores que precisamos
    return `${dia}/${mes}/${ano}`//e retornamos eles com as barras de datas
}

const dataConvertida:string = conversorData(data)
console.log(dataConvertida)

// 2

const qualquer:any = "Sei la, tu que escolhe"
console.log(typeof(qualquer))

// 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type infoFilme = {
    nomeFilme:string, 
    anoFilme:number, 
    generoFilme:GENERO,
    notaFilme? :number 
}

const filme:infoFilme = {
    nomeFilme:"Duna", 
    anoFilme:2021, 
    generoFilme:GENERO.ACAO,
}

console.log(filme)

// 4

enum setores {
    marketing="marketing",
    vendas="vendas",
    financeiro="financeiro" 
}

type pessoas ={
    nome: string, 
    salário: number, 
    setor: setores, 
    presencial: boolean 
}

const array=[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

const filraMarketing = array.filter((pessoa:pessoas)=>{
    return pessoa.setor === setores.marketing && pessoa.presencial === true
})

console.log(filraMarketing)

// 5

type usuarios ={
    name: string, 
    email: string, 
    role: string
}

const infos:usuarios[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const emailAdm = infos.filter((pessoa)=>{
    return pessoa.role === "admin"
}).map((contato)=>{
   return contato.email
})

console.log(emailAdm)

// 6

type cliente ={
    cliente: string, 
    saldoTotal: number, 
    debitos: number[]
}

const clientes:cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const negativados:cliente[] = clientes.filter((cliente)=>{
    let somaDebito = 0;
    cliente.debitos.forEach((item) => {
        somaDebito += item;
    });
    let saldoFinal = cliente.saldoTotal - somaDebito
    if (saldoFinal < 0){
        return [cliente.cliente, cliente.saldoTotal=saldoFinal, cliente.debitos = []]
    }
})

console.log(negativados)

// 7

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

type PRODUTOS ={
    nome: string, 
    quantidade: number, 
    valorUnitario: number | string
}

const itens:PRODUTOS [] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const novaLista = itens.map((item)=>{
    const valorAjustado = ajustaPreco(item.valorUnitario as number)
    return [item.nome, item.quantidade, item.valorUnitario = valorAjustado]
})

console.log(novaLista)

// 8

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) {

    const idade:number = anoAtual - anoNascimento
    const tempoCarteira:number = anoAtual - anoEmissao

    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(2022, 1992, 2018))