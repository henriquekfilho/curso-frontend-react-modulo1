const prompt = require("prompt-sync")()
console.log("=================================================");
let numero = prompt("Quer que conte à partir de quanto? ");
console.log(" ");
console.log("===========  CONTAGEM DECRESCENTE DE: " + numero + "  ===========");
for (let i = numero; i >= 1; i--) {
    console.log("Contando..." + i);
}
console.log(" ");
console.log("===========  CONTAGEM DECRESCENTE DE: " + numero + "  ===========");