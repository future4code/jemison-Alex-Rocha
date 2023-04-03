// **Exercício 2**
    
//  Crie uma aplicação Node que recebe uma string representando uma operação 
//  matemática e dois valores numéricos. O retorno deverá ser 
//  o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operacao = process.argv[2]
const nu1 = Number(process.argv[3])
const nu2 = Number(process.argv[4])

function calculadora(operacao,nu1,nu2){
if(operacao==="add"){
  return nu1+nu2
}
if(operacao==="sub"){
 return nu1-nu2
}
if(operacao==="mult"){
 return nu1*nu2
}
if(operacao==="div"){
 return nu1/nu2
}
}
    
const resultado = calculadora(operacao,nu1,nu2)
console.log(resultado);