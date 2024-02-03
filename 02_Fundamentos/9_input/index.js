const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual lingaugem preferida de programação? ", (language) => {
    if(language === "JS") {
        console.log("Isso nem e linguagem")
    } else {
    console.log(`A minha lingaugem preferida é:  ${language}`)
    }
    readline.close()
    
})