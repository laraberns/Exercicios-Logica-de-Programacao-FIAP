import { somar } from './funcoes.js'
import { escrever, lerNumero } from './es.js'

escrever('PROGRAMA DA SOMA')

// entrada de dados
let a = lerNumero('Digite um número')
let b = lerNumero('Digite outro número')

// processamento de dados
let resposta = somar(a, b)

// saída de dados
escrever('A soma é ' + resposta)