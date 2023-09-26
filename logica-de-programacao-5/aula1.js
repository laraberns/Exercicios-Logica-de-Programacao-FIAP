import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DO FATORIAL')

console.log('Diga um número:')
let numero = Number(pergunte())

let fatorial = 1
let contador = numero

while (contador > 1) {
    fatorial = fatorial * contador

    contador--


}


console.log('O fatorial do número informado é ' + fatorial)

