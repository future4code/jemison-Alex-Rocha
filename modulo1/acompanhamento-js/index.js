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

/* let verificarImpar = (numero,imprime) => {
if(numero %2 !== 0){
imprime(numero)
}else{
     console.log("Insira um numero impar!")
}
function imprimirMensagem (resultado ) {
     console.log(`O ${resultado} e impar !`)
} */


/* 
2. Faça um programa que:
    - [ ]  Tenha um array de números (quaisquer valores)
    - [ ]  Imprima no console um novo array contendo apenas string:
        
        O formato das strings deve ser: `O elemento ${index} é ${valor}` */

/*
let lista = [1,2,3,4,5,70,7,8,9]
 let mudancaDeArray = (array) =>{
    let  novaArray = array.map((elemento,indice,array) =>{
          return elemento,indice
          
     }
     
     )
      for(let i = 0 ; i <novaArray.length ; i++){
          console.log(`O elemento ${i} e ${novaArray[i]}`)
     } 
     mudancaDeArray = (lista)
     
} */


/* 
3. Faça um programa que:
    - [ ]  Tenha uma lista de números (quaisquer valores)
    - [ ]  Crie dois novos arrays:
        - [ ]  Um só com números maiores que 10
        - [ ]  Outro só com números pares
 */

     /*    let lista = [1,2,3,4,5,70,7,8,9,90,22,30]
        function filtroLista(lista){

        
        let listaPares = lista.filter((elemento,indice,array) => {
          return elemento % 2 === 0
        }
        )
        let listaMaiorDoQue10 = lista.filter((elemento,indice,array) =>{
          return elemento > 10
        })
        console.log (listaPares)
        console.log(listaMaiorDoQue10)
     } */


    /*  4. Pegue o seguinte array de produtos:
    
   
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
    	{ nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
    ]
    
    
    - [ ]  Crie uma lógica que:
        - [ ]  **Filtre** os produtos pela **categoria Bebida**
        - [ ]  **Mapeie** os **nomes** desses produtos
        - [ ]  **Imprima no console** um novo **array** com os nomes das bebidas */


      /*   const produtos = [
          { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
          { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
          { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
          { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
          { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
          { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
          { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
          { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
          { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
          { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
     ]
        let listaBebidas = produtos.filter((elemento,indice,array) =>{
          return elemento.categoria === "Bebidas"
        }
        )
        let nomeBebidas = listaBebidas.map ((elemento,indice,array) =>{
          return elemento.nome
        })
        console.log(nomeBebidas) */