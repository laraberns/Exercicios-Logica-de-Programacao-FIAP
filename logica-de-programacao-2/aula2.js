import prompt from 'prompt-sync'

let pergunte = prompt()

console.log("PROGRAMA DA COMPRA COM CUPOM")
console.log("Qual o valor da compra?")
let valorTotal = Number(pergunte())

console.log("Qual o cupom?")
let cupom = Number(pergunte())

let desconto = valorTotal * cupom / 100
let valorComDesconto = valorTotal - desconto

console.log("O valor da compra com desconto é " + valorComDesconto)
