const x = '10'

// conferir se X e um número

if (!Number.isInteger(x)) {
    throw new Error('Não e um INTEIRO')
}

console.log('Continuando o codigo....')