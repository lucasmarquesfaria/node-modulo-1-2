const fs = require("fs")

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oiii', function(err){
    setTimeout(function(){
        console.log('Arquivo Criad !')
    },1000)
})

console.log('Fim')

// criação de log do sistema ex= a cada vez que o usuario entrar no sistema ele grava no arquivo