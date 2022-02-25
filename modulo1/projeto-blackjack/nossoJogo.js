/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Boas vindas ao jogo de Blackjack!")
console.log(`Boas vindas ao jogo de Blackjack!`);
if(confirm("Quer iniciar uma nova rodada?")){
   const cartaUm = comprarCarta();
   const carta1 = cartaUm.texto
   const valorCarta1 = cartaUm.valor
   const cartaDois = comprarCarta();
   const carta2 = cartaDois.texto
   const valorCarta2 = cartaDois.valor
   console.log(`Usuário - cartas:${carta1} ${carta2} - pontuação ${valorCarta1+valorCarta2}`);
   const cartaPcUm = comprarCarta();
   const cartaPc1 = cartaPcUm.texto
   const valorCartaPc1 = cartaPcUm.valor
   const cartaPcDois = comprarCarta();
   const cartaPc2 = cartaPcDois.texto
   const valorCartaPc2 = cartaPcDois.valor
   console.log(`Computador - cartas:${cartaPc1} ${cartaPc2} - pontuação ${valorCartaPc1+valorCartaPc2}`);
   if((valorCarta1+valorCarta2)>(valorCartaPc1+valorCartaPc2)){
      console.log("O usúario ganhou!");
   } else if((valorCarta1+valorCarta2)<(valorCartaPc1+valorCartaPc2)){
      console.log("O computador ganhou!");
   }else{
      console.log("Empate!");
   }
}