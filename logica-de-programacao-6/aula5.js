import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('EXERCICIO DO MAIOR NUMERO DA MATRIZ')

console.log('Diga a quantidade de linhas da matriz:')
let linhas = Number(pergunte())

console.log('Diga a quantidade de colunas da matriz:')
let colunas = Number(pergunte())

let numeros = []

for (let linha = 0; linha < linhas; linha++) {

    numeros[linha] = []

    for (let coluna = 0; coluna < colunas; coluna++) {

        console.log('Informe um valor')
        numeros[linha][coluna] = Number(pergunte())

    }
}

console.log(numeros)

let maior = 0

for (let linha of numeros) {
    for (let coluna of linha) {
        if (coluna > maior) {
            maior = coluna
        }
    }
}

console.log(maior)

