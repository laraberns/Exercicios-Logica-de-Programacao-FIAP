import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA VERIFICADOR DE COR PRIMARIA')

console.log('Digite uma cor')
let cor = pergunte()

let corFormatado = cor.toLowerCase()

let validacao = corFormatado == 'amarelo' || corFormatado == 'azul' ||  corFormatado == 'vermelho'

console.log("A cor é primária? " + validacao)
