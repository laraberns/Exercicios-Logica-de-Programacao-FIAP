import prompt from 'prompt-sync'
let pergunte = prompt()


//funcao para escrever mensagem no terminal
export function escrever(msg) {
    console.log(msg)
}

// funcao para pedir numero ao usuario
export function lerNumero(msg) {
    escrever(msg)
    let num = Number(pergunte())
    return num
}
