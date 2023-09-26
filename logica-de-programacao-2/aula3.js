import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DA HIPOTENUSA')

console.log('Qual o valor do primeiro cateto?')
let cateto1 = Number(pergunte())

console.log('Qual o valor do segundo cateto?')
let cateto2 = Number(pergunte())

let hipotenusa =  Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
console.log('A hipotenusa é ' + hipotenusa)