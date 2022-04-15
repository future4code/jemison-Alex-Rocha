//1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//true
console.log("d. ", typeof resultado)
//boleano


//2. O problema é que não vai somar duas strings, vai no
// máximo concatenar os numeros.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
//3. Solução:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

