/* questao1
   let primeiroNumero = prompt("Qual o primeiro número?")
   let segundoNumero = prompt("Qual o segundo número?")
   
     if(primeiroNumero === segundoNumero){
          console.log ("Sucesso!")
     }
     else {
          console.log ("Sem sucesso!")
     }
 */

 //questao2
 /* let primeiroNumero = prompt("Qual o primeiro número?")
    let segundoNumero = prompt("Qual o segundo número?")
   
     if(primeiroNumero === segundoNumero){
          console.log ("São iguais")
     }
     else {
          console.log ("São diferentes")
     } */

     //questao3
    /*  let primeiroNumero = Number(prompt("Qual o primeiro número?"))
     let segundoNumero = Number(prompt("Qual o segundo número?"))
   
     if(primeiroNumero === segundoNumero){
          console.log ("São iguais")
     }
     else if(primeiroNumero > segundoNumero){
          console.log ("Primeiro número é maior")}
          else{
               console.log ("Segundo número é maior")
          } */
          //questao4
          let primeiroNumero = Number(prompt("Qual o primeiro número?"))
          let segundoNumero = Number(prompt("Qual o segundo número?"))
          const resultado = {
               maiorNumero:"",
               maiorDivisivelPorMenor:"",
               diferenca:""

          }
     if(primeiroNumero >0 && segundoNumero>0 && primeiroNumero === segundoNumero &&primeiroNumero >=0 &&segundoNumero >= 0){
         resultado.maiorNumero = "Não existe"
         resultado.maiorDivisivelPorMenor = true
         resultado.diferenca = 0
         console.log (resultado)
     }
     else if(primeiroNumero >0 && segundoNumero>0 && primeiroNumero > segundoNumero && (primeiroNumero-segundoNumero)>0){
          resultado.maiorNumero = primeiroNumero
         resultado.maiorDivisivelPorMenor = true
         resultado.diferenca = (primeiroNumero-segundoNumero)
         console.log (resultado)    
     }
          else if(primeiroNumero >0 && segundoNumero>0 && segundoNumero>primeiroNumero && (segundoNumero-primeiroNumero)>0){
         resultado.maiorNumero = segundoNumero
         resultado.maiorDivisivelPorMenor = true
         resultado.diferenca = (segundoNumero-primeiroNumero)
         console.log (resultado)
          }else {
               console.log("Reinsira valores maiores que 0!")
          }