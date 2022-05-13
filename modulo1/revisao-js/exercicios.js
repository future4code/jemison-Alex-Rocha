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
   let novaarray
  for(let index = 0; index <= array.length ; index ++){
   if(array[index]%2){
      novaarray.push(index)
      // return novaarray
  }
   return novaarray

   }
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

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