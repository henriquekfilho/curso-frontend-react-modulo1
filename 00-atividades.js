//Montanha Russa com critério de altura

const prompt = require("prompt-sync")()

let alturaTexto = prompt("Qual é a sua altura em centímetros?")
let alturaConvertida = Number(alturaTexto)

if (alturaConvertida >= 140) {
    console.log("Pode entrar!")
} else if (alturaConvertida >= 120 && alturaConvertida < 140) {   
    console.log("Pode entrar com acompanhante!")
}else {
    console.log("Não pode entrar.")
}