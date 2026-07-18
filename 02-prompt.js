//Receber dados do usuário pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log("Olá " + nome + ", seja bem-vindo(a)!")
console.log("Você terá " + (parseInt(idade) + 1) + " anos.")
console.log("Você terá " + (++idade) + " anos.")
console.log("Você terá " + (Number(idade) + 1) + " anos.")
