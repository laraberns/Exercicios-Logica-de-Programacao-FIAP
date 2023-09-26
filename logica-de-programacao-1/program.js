import prompt from 'prompt-sync';
let pergunte = prompt()

console.log("Qual o seu nome?")
let nome = pergunte()

console.log("Seja bem-vindo(a), " + nome)

console.log("Informe um número")
let numero1 = Number(pergunte())
 
console.log("Informe outro número")
let numero2 = Number(pergunte())

let soma = numero1 + numero2

console.log(nome + ", a soma é " + (soma))