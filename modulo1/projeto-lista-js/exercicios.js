// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Insira a altura.")
  const largura = prompt("Insira a largura.")
  let areaRetangulo = altura*largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual."))
  const anoNascimento = Number(prompt("Insira o ano de nascimento."))
  let idade = anoAtual- anoNascimento
  console.log(idade)
  console.log(typeof.idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const peso = Number(prompt("Insira seu peso em Kg."))
  const altura = Number(prompt("Insira sua altura em metros."))
  let IMC = peso/(altura*altura)
  console.log(IMC)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt ("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual o seu e-mail?")
let frase = `Meu nome é ${nome}, tenho ${idade}, e o meu email é ${email}.`
console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt ("Qual sua primeira cor favorita?")
const cor2 = prompt ("Qual sua segunda cor favorita?")
const cor3 = prompt ("Qual sua terceira cor favorita?")
  const coresFavoritas []
  coresFavoritas.push(cor1,cor2,cor3)
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let frase = prompt('Digite uma frase.')
let fraseMaiuscula = frase.toUppercase()
console.log(fraseMaiuscula))
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custo = prompt("Quanto custou o espetaculo?")
  const valorIngresso = prompt("Qual o valor de cada ingresso?")
  let Ingressos = custo / valorIngresso
  console.log(`Você tem que vender ${Ingressos} para pagar os custos`)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let string1 = prompt("Coloque a primeira frase.")
  let string2 = prompt("Digite a segunda frase")
  let comparador = string1.length === string2.length
 console.log (comparador)

console.log(comparador)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  var contador = prompt("Insira sua lista.")
let array = []
//array.push.apply(array,contador.split(","))

console.log(`Primeiro elemento da lista ${contador.split(".").split(",")[0]}`)
//console.log(`Tamanho da lista é ${array.length}`)

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  var contador = prompt("Insira sua lista.")
  let array = []
  array.push.apply(array,contador.split(","))
  console.log(`Seu ultimo elemento é ${array[array.lengh-1]}`)
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  var contador = prompt("Insira sua lista.")
  let array = []
  array.push.apply(array,contador.split(","))
  let primeiElemento = array[0]
  let ultimmoElemento = array[array.length-1]
  array.splice (0,1)
  array.pop()
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let string1[]
let string2[]
console.log(string1 === string2)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}