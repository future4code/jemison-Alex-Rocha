// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro 
// e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro 
// e retorne este array invertido.
function retornaArrayInvertido(array) {
   /* function retornaArrayInvertido(array) {
      for (let index = array.length; index >=0 ; index --){
         let arrayInvertida = []
         arrayInvertida.push(index)
         return arrayInvertida
      }
      
    } */
   // let array = [1, 2, 5, 7, 9, 4];
   // let arrayInvertido = array.reverse();
     return(array.reverse())
 }
// EXERCÍCIO 03
// Escreva uma função que recebe um array de 
// números e retorne o array com os números em ordem crescente. 
function retornaArrayOrdenado(array) {
  function comparador (a,b) {
     return a-b
  }
   return(array.sort(comparador))
  
}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne 
// um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
   let novaarray = []
   
   for (let pares of array){
       
       if(pares % 2 === 0){
        
         novaarray.push(pares)     
      }
       }
       return novaarray 
  
}

// EXERCÍCIO 05
// Escreva uma função que recebe um array de números e retorna um array
// com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {
   let novaarray = []
   
   for (let pares of array){
       
       if(pares % 2 === 0){
        
         novaarray.push(pares**2)     
      }
       }
       return novaarray 
}

// EXERCÍCIO 06
// Escreva uma função que receba um array de números e retorne o maior 
// número dele.
function retornaMaiorNumero(array) {
   let maior = - Infinity
   let i = 0
   while (i <=array.length){
      if(array[i] > maior){
         maior = array[i]
      }
      i++
   } 
   return maior
}
// EXERCÍCIO 07
/* Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:
- `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)
⚠️   Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima */
function retornaObjetoEntreDoisNumeros(num1, num2) {
 /*   let maiorNumero = 0
   let menorNumero = 0
   let diferencaNumeros = maiorNumero - menorNumero
   let maiorDivisivelPorMenor = maiorNumero/menorNumero
   let valorBooleanoDivisao = false
   let novoObjeto = {
      
   }
   if (num1 > num2){
         maiorNumero = num1
         menorNumero = num2}
         else {
            maiorNumero = num2
            menorNumero = num1
         }
     function conferindoDivisao (maiorDivisivelPorMenor){
     if(maiorDivisivelPorMenor >0){
        return valorBooleanoDivisao = true
     }
     return valorBooleanoDivisao = false
   }
     
     novoObjeto.numeroMaior = maiorNumero
     novoObjeto.maiorDivisivelPorMenor = valorBooleanoDivisao
     novoObjeto.diferenca = diferencaNumeros
     return novoObjeto */
}

// EXERCÍCIO 08
//Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
function retornaNPrimeirosPares(n) {
   
   
   let arrayParesDePura = []
   for (let index = 0; index <= n+(n-1); index ++){
      
      if (index % 2 === 0){
         arrayParesDePura.push(index)
      }
   } 
   return arrayParesDePura
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
 if(ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
 } else if(ladoA ===ladoB || ladoB===ladoC || ladoA ===ladoC) {
   return "Isósceles"
}
 else {
    return "Escaleno"
 } 
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}