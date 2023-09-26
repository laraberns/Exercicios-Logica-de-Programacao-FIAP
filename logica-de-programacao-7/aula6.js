import { escrever, lerNumero } from './es.js'
import { calculaFatorial, calculaMedia, funcaoDobro, funcaoFebre } from './funcoes.js'

/* escrever('PROGRAMA DO DOBRO')

let num = lerNumero('Digite um número')

let dobro = funcaoDobro(num)

escrever('O dobro é ' + dobro) */



/* escrever('PROGRAMA DA FEBRE')

let num = lerNumero('Em quantos graus está sua temperatura?')

let estaComFebre = funcaoFebre(num)

escrever(estaComFebre) */



/* escrever('PROGRAMA DO FATORIAL')

let num = lerNumero('Digite um número')

let fatorial = calculaFatorial(num)

escrever('O fatorial é ' + fatorial) */



escrever('PROGRAMA DA MEDIA DE NOTAS')

let qtd = lerNumero('Qual quantidade de notas você quer?')

let array = []

for(let cont = 0; cont < qtd; cont ++){
    array[cont] = lerNumero('Digite um número')
}

let media = calculaMedia(array)

escrever("A média é " + media)


