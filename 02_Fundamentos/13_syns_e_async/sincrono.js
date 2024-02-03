const fs = require("fs")

console.log('Inicio')

fs.writeFileSync('arquivo.txt', 'oi')  // criando arquivo

console.log('Fim')