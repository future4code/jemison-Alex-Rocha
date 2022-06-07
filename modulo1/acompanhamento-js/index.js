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
         /*  let primeiroNumero = Number(prompt("Qual o primeiro número?"))
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
          } */

          // Exercicios de Laços
          // 1. Faça uma lógica que:
          //[ ]  **Peça para o usuário** digitar vários números, um após o outro
          //[ ]  O prompt apenas para quando usuário digitar 0.
          //[ ]  E então **imprime no console** a soma de todos os números por ele indicados.

        /*   let numeros = Number(prompt("Insira numeros para a soma, o numero 0 finalizara o processo."))
          
          let soma = 0
          
       while(numeros !==0){
               soma = soma +numeros
             numeros =  Number(prompt("Insira outros numeros para a soma, o numero 0 finalizara o processo."))
          
               }
               console.log(soma)
           */

            
          // 2. Escreva uma **função** que:
          //[ ]  **Receba um array** com números
          //[ ]  **Retorna** qual o maior dentro dele.
    /*       function retornaMaiorNumeroArray(array){
          
          let maiorNumero = -Infinity
     
          for(let index = 0; index < array.length; index ++){
             if(maiorNumero < array[index]){
                  maiorNumero = array[index]
             }  
               

          } 
          return maiorNumero
       } */


          //3. Crie uma lógica que:
          //[ ]  Recebe um array ****contendo várias palavras
          //[ ]  E então **crie uma função que:**
          //[ ]  **Imprima** uma mensagem contendo as palavras desse array, colocando um espaço entre elas.

       /*    function imprimeArray(array){
          let frase = "";
          for(let i =0;i<array.length;i++){
               frase = frase+" "+array[i]
          }
          return frase
          }
          imprimeArray(["ola","mundo","!"]) */


         //4. **Escreva uma função** que:
          //[ ]  Recebe um número
          //[ ]  E então retorna uma array contendo a quantidade de números pares.
          // **Exemplo:** `3` retorna `[2, 4, 6]`

          // let numero = Number(prompt("Digite uma numero > 0"))
          
          
          /* function numeroPares(numero){
               let array = []
            for(let i =0;i < numero+(numero-1); i++){
              if(i%2===0){
               array.push(i)
              } 
            } 
            
            return array   
            }
            
           */

            ou

            /* function retornaNPrimeirosPares(n) {


               let arrayParesDePura = []
                let a = 0
               for (let index = 0; index < n; index ++){
            arrayParesDePura.push(a)
                    a =a+2      
                     
                   
                  }
                return arrayParesDePura
               }  */



               //Callback e Funções de Array
// 1. Faça um código que:
// - [ ]  Receba um único número
// - [ ]  Determine se esse número é **ímpar**
        
//         Use uma função de **callback** para imprimir a mensagem no console.
        
//- [ ]  Imprima no terminal "Sim, é ímpar" **somente** se o número for ímpar.
// - [ ]  Se não for, não faça **nada**