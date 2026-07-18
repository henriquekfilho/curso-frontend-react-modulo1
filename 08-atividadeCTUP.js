const prompt = require("prompt-sync")()
console.log("=================================================");
let numero = prompt("Quer que conte até quanto? ");
console.log(" ");
console.log("===========  CONTAGEM CRESCENTE ATÉ: " + numero + "!  ===========");
for (let i = 1; i <= numero; i++) {
    console.log("Contando..." + i);
}
console.log(" ");
console.log("===========  CONTAGEM CRESCENTE ATÉ: " + numero + "!  ===========");