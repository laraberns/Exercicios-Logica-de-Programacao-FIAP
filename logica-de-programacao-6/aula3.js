import prompt from 'prompt-sync'
let pergunte = prompt()


console.log('PROGRAMA DOS NOMES - ARRAY')

let array = []

// pede para usuarios carregar valores
for (let cont = 0; cont < 3; cont++) {
    console.log('Informe um nome para a posição ' + cont)
    let nome = pergunte()

    array[cont] = nome
}

console.log('Os valores informados foram ' + array)

// algoritmo para iterar = mostrar valores
for (let cont = 0; cont < array.length; cont++) {
    let item = array[cont]
    console.log('O item '  + cont + ' é ' + item)
}

// for of
for (let item of array){
    console.log(item)
}