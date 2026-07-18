const prompt = require("prompt-sync")()
console.log("=================================================")
let numero = prompt("Qual é a tabuada selecionada? ")
console.log(" ")
console.log("===========  TABUADA SELECIONADA = " + numero + "!  ===========")
for (let j = 1; j <= 10; j++) {
    console.log(`${numero} x ${j} = ${numero * j}`);  //template string
}
console.log(" ")
console.log("===========  TABUADA SELECIONADA = " + numero + "!  ===========")