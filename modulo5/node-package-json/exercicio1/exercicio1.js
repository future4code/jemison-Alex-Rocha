// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar
//  os parâmetros passados na linha de comando para o Node?

// a) utilizando o parametro ProcessingInstruction.argv a partir da possição
// [2] da array de entrada

// b) Crie um programa que receba seu nome e sua idade. Após receber estes 
// valores, imprima no console uma mensagem que siga a seguinte estrutura:

// const nome = process.argv[2]
// const idade = process.argv[3]
// console.log("Olá," ,nome, "!Você tem" ,idade, "anos.");

// c) Altere o programa acima para que mostre também a sua idade daqui a sete
//  anos.


const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = idade+7
console.log("Olá," ,nome,"!Você tem" ,idade, "anos. Em sete anos você terá" ,novaIdade ,);

