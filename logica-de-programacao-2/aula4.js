import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DE FORMATAÇÃO ABNT')
console.log('Qual o nome do autor?')
let nome = pergunte()

let nomePrimeiraLetra = nome.charAt(0)

let posicaoEspaco = nome.indexOf(' ')
let tamanho = nome.length

let sobrenome = nome.substring(posicaoEspaco+1, tamanho)

let nomeCompleto = (sobrenome + ', ' + nomePrimeiraLetra)

let nomeCompletoMaisuculo = nomeCompleto.toUpperCase()

console.log(nomeCompletoMaisuculo)

// João Dias
// DIAS, J