ˋˋˋ
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
    
    return(`O numero ${numeroEscolhido} aparece ${contador}x`)
    }else{
        return("Número não encontrado")
        
    }
}ˋˋˋ
ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let contador = 0
    
   
    for(let numero =0; numero< arrayDeNumeros.length;numero +=1){
      if(arrayDeNumeros[numero] === numeroEscolhido){
        contador += 1
        
      }
      else{
        
      }
    }
    if(contador > 0){
    
    return(`O numero ${numeroEscolhido} aparece ${contador}x`)
    }else{
        return("Número não encontrado")
     
    }  
}ˋˋˋ