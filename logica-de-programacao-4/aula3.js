import prompt from 'prompt-sync'
let pergunte = prompt()

console.log('PROGRAMA DO SEMESTRE')

console.log('Diga um mês:')
let mes = pergunte()

let resultado = ''

switch (mes) {

    case 'janeiro':
    case 'fevereiro':
    case 'março':
    case 'abril':
    case 'maio':
    case 'junho':
        resultado = 'primeiro semestre'
        break

    case 'julho':
    case 'agosto':
    case 'setembro':
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        resultado = 'segundo semestre'
        break

    default:
        resultado = 'valor inválido'
        break

}

console.log('O semestre é: ' + resultado)


