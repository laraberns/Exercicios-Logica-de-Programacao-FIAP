import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DA MAIOR NOTA')

console.log('Diga qual a quantidade de notas que você quer armazenar:')
let quantidade = Number(pergunte())

let array = []

for (let cont = 0; cont < quantidade; cont++) {
    console.log('Digite a nota ' + (cont + 1))
    let nota = Number(pergunte())

    array[cont] = nota
}

let maior = 0

for (let item of array) {
    if (item > maior) {
        maior = item
    }
}

console.log('A maior nota é ' + maior)