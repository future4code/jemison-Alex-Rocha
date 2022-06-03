function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let contador = 0
    
    
    for(let numero of arrayDeNumeros){
      if(numero === numeroEscolhido){
        contador = contador+1
    
      }
      else{
    
      }
    }
    if(contador > 0){
    
    console.log(`O numero ${numeroEscolhido} aparece ${contador}x`)
    }else{
        console.log("Número não encontrado")
        
    }
}

