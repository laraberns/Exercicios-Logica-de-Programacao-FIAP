import prompt from 'prompt-sync'
let pergunte = prompt()


console.log('PROGRAMA DO(A) ALUNO(A)')

console.log('Qual a sua nota?')
let nota = Number(pergunte())

if (nota > 10 || nota < 0) {
    console.log("Nota inválida")
} else {
    if (nota >= 6) {
        console.log('Você está aprovado')
    } else {
        if (nota >= 4) {
            console.log('Você está em recuperação')
        } else {
            console.log("Você rodou direto")
        }
    }
}

