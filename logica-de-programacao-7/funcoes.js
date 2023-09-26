
export function somar(numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}


export function funcaoDobro(numero) {
    let dobro = numero * 2
    return dobro
}


export function funcaoFebre(numero) {

    let situacao = ''

    if (numero >= 38) {
        situacao = 'Você está com febre'
    } else {
        situacao = 'Você não está com febre'
    }

    return situacao
}

export function calculaFatorial(numero) {

    let fatorial = 1

    for (let cont = numero; cont > 1; cont--) {
        fatorial = fatorial * cont
    }

    return fatorial
}

export function calculaMedia(arrayDeNumeros) {

    let soma = 0

    for (let item of arrayDeNumeros) {
        soma = soma + item
    }

    let media = soma / arrayDeNumeros.length

    return media
}