/* Interpretação 1
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })    //Não será impresso nada, a função foi criada mas não foi chamada
*/

/* Interpretação 2
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
  // Será impresso os nomes das instrutoras, um em baixo do outro
  */

  /* Interpretação 3
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
// Será impresso: Mandi
//                Laura
*/

/* Escrita 1
//a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomes = pets.map((nomeCusco) =>{
    return nomeCusco.nome
 })
 console.log(nomes);
//b.
 const salsichas = pets.filter((salsicha,i) =>{
   return salsicha.raca === "Salsicha"   
 }).map((salsicha)=>{console.log(salsicha);})
//c.
 const poodles = pets.filter((poodle)=>{
     return poodle.raca === "Poodle"
 }).map((poodle)=> console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`))
*/

/* Escrita 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ] 

 const nomeProduto = produtos.map((nome)=>{
     return nome.nome
 })
 console.log(nomeProduto);

 const cincoDesconto = produtos.map((desconto,i,array)=>{
    //desconto.preco = desconto.preco-desconto.preco*0.05 
    //delete desconto.categoria
    return desconto = {nome:desconto.nome,preco:desconto.preco-desconto.preco*0.05}
 })
 console.log(cincoDesconto)

 const bebidas = produtos.filter((bebida)=>{
     return bebida.categoria === "Bebidas"
 }).map((bebida)=> console.log(bebida))
 
const produtoYpe = produtos.filter((ype)=>{
    return ype.nome.includes("Ypê")
}).map((ype)=>console.log(ype))

const vendaYpe = produtos.filter((ype)=>{
    return ype.nome.includes("Ypê")
}).map((ype)=>console.log(`Compre ${ype.nome}, por R$${ype.preco}`))
*/