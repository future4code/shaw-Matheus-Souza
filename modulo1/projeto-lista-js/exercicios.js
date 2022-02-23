// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(n1,n2) {
  // implemente sua lógica aqui
  const altura = prompt (`Digite a altura do retângulo`)
  const largura = prompt (`Digite a largura do retângulo`)
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt (`Em que ano estamos?`)
  const anoNascimento = prompt (`Em que ano você nasceu?`)
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(n1, n2, n3) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Digite seu nome`)
  const idade = prompt(`Digite sua idade`)
  const email = prompt(`Digite seu email`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt (`Digite uma cor que você gosta`)
  const corDois = prompt (`Digite  mais uma cor que você gosta`)
  const corTres = prompt (`Digite só mais uma cor que você gosta`)
  array = [corUm, corDois, corTres]
  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanho = array.length
  return array [tamanho-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultArray = array.length-1
  const backup = array [0]
  array [0] = array [ultArray]
  array.pop(), array.push(backup)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase()===string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = prompt (`Em que ano estamos?`)
  const nasci = prompt (`Em que ano você nasceu?`)
  const carteira = prompt (`Em que ano seu RG foi emitido?`)
  const idade = ano-nasci
  const renov = ano-carteira
  const jovem = idade<=20 
  const adulto = idade<=50 
  const velho = idade>50 
  const renovUm = renov>=5
  const renovDois = renov>=10
  const renovTres = renov>=15
  let confUm = jovem&&renovUm
  let confDois = adulto&&renovDois
  let confTres = velho&&renovTres 
  console.log (confUm||confDois||confTres)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const verif1 = ano%4
  const bool1 = verif1===0
  const verif2 = ano%400
  const bool2 = verif2===0
  const verif3 = ano%100
  const bool3 = verif3===0
  return !(bool3&&!bool2)&&bool1
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 const idade = prompt (`Você tem mais de 18 anos?`)
 const ensino = prompt (`Você possui ensino médio completo?`)
 const horario = prompt (`Você possui disponibilidade exclusiva durante os horários do curso?`)
 const um = idade.toUpperCase()===("SIM")
 const dois = ensino.toUpperCase()===("SIM")
 const tres = horario.toUpperCase()===("SIM")
 console.log(um&&dois&&tres)
}