/*
let a = 10
let b = 10

console.log(b)
resposta 10
b = 5
console.log(a, b)
resposta 10 5 
*/

/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) 
resposta 10,10,10
*/

/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
resposta p = HorasNoDiaTrabalhadas, t = SalarioPorDia
*/
let nome = "";
let idade = 
console.log(typeof(nome));
console.log(typeof(idade));
// Primeiro tipo foi uma string definida pelas aspas
// enquanto no Segundo não tinha como ser definido

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
console.log(typeof(nome));
console.log(typeof(idade));
//Nos dois casos foi uma string, por que o comando "prompt"
//converte tudo em string

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
console.log('Olá', nome ,'você tem', idade, 'anos');
//
//Exercício 2
let idade = prompt("Você é maior de idade?");
let roupa = prompt("Você esta usando roupa azul hoje?");
let atividades = prompt("Terminou as atividades de hoje?");
console.log("Você é maior de idade? - ", idade);
console.log("Você esta usando roupa azul hoje? - ", roupa);
console.log("Terminou as atividades de hoje? - ", atividades);
//
//Exercicio 3
let a = number.prompt("Insira valor de A")
let b = prompt("Insira valor de B")
let trocaAB = b;
let trocaBA = a;
//let c = b
//b = a 
//a = c 
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", trocaAB) // O novo valor de a é 25
console.log("O novo valor de b é", trocaBA) // O novo valor de b é 10

