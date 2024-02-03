const chalk = require('chalk')

const nota = 7.5

if(nota >=7 ){
    console.log(chalk.green('Parabéns Aprovado!'))
} else {
    console.log(chalk.bgRed.black.bold('Reprovado'))
}