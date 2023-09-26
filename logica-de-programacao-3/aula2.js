import prompt from 'prompt-sync'
let pergunte = prompt()

console.log("PROGRAMA DA MÉDIA")

console.log("Qual a nota 1?")
let nota1 = Number(pergunte())

console.log("Qual a nota 2?")
let nota2 = Number(pergunte())

console.log("Qual a nota 3?")
let nota3 = Number(pergunte())

let media = (nota1 + nota2 + nota3) / 3

let aprovado = media >= 6

console.log("A sua média é " + media)
console.log("Você foi aprovado? " + aprovado)