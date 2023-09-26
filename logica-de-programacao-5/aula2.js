// repeticao dentro de repeticao

import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DE DESENHAR QUADRADO')

console.log('Digite um número:')
let numero = Number(pergunte())

for (let linha = 0; linha < numero; linha++) {

    for (let coluna = 0; coluna < numero; coluna++) {
        process.stdout.write('*')
    }

    console.log()
} 







/* import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DE INVERTER PALAVRAS')

console.log('Digite uma palavra:')
let palavra = pergunte()

let novo = ''

for (let cont = palavra.length; cont >= 0; cont --){
    let letra = palavra.charAt(cont)

    novo = novo + letra 
}

console.log(novo) */
