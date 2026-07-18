//Desafio 2 - maior de 2 numeros
function maiorDeDois(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log("O maior número é: " + maiorDeDois(10, 5)); // Saída: 10
console.log("O maior número é: " + maiorDeDois(11, 12)); // Saída: 12
console.log("O maior número é: " + maiorDeDois(2, 15)); // Saída: 15

//outra solução usando operador ternário
function maiorDeDoisTernario(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log("O maior número é: " + maiorDeDoisTernario(10, 5)); // Saída: 10

//usando 
const maiorEntreDois = (num1, num2) => (num1 > num2) ? num1 : num2;
console.log("O maior número é: " + maiorEntreDois(66, 33)); // Saída: 66