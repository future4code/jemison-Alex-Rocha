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
   //  console.log("Boas vindas ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")){
    
    
    
    //console.log("Boas vindas ao jogo de Blackjack!")
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
    //const naipes = [...cartas,...cartas,...cartas,...cartas]
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
    let pontosUsuario = 0
    let pontosMaquina = 0
    
     function cartasUsuario(){
    //randomizacao de cartas
    
    const numero = cartas[Math.floor(Math.random() * 13)]
    const naipe = naipes[Math.floor(Math.random() * 4)] 
    
    let valor
    if (numero === "A") {
      valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10
    } else { 
      valor = Number(numero)
    }
    
    const carta = {
      texto: numero + naipe,
      valor: valor
    }
    
    return carta
    
    
    pontosUsuario += carta.valor
    pontosUsuario += carta.valor
    }
    console.log(cartasUsuario.carta.texto)
    console.log(cartasUsuario.carta.valor)

    function cartasMaquina(){
      //randomizacao de cartas
      
      const numero = cartas[Math.floor(Math.random() * 13)]
      const naipe = naipes[Math.floor(Math.random() * 4)] 
      
      let valor
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { 
        valor = Number(numero)
      }
      
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
      
      return carta
      
    pontosMaquina += carta.valor
    pontosMaquina += carta.valor
    }
    console.log(cartasMaquina.carta.texto)
    console.log(cartasMaquina.carta.valor)
    
    function verificarCartas (){
      if(pontosUsuario === 21){
        console.log("Usuario Ganhou!")
      } else if (pontosMaquina === 21){
        console.log("Você perdeu!")
      }else if (pontosUsuario === 21 && pontosMaquina === 21){
        console.log("Deu empate!")
      } else if (pontosUsuario <= 17){
        while (pontosMaquina > pontosUsuario){
          return (pontosMaquina += carta.valor)
        }  if (pontosUsuario > 21){
          console.log("Você perdeu!")
        }/* else if () { */
    
        }if(pontosMaquina > 21){
          console.log("Usuario Ganhou!")
        }
      }
    }
    
     else{
      console.log("O jogo acabou.")
    }