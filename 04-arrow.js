//Função tradicional (soma, subtração, multiplicação, divisão)
function somaTradicional(a, b) {
    return a + b;
}
console.log(somaTradicional(2, 6)); // Saída: 5

//Mesma funcão na forma de arrow function
const somaArrow = (a, b) => a + b;
console.log(somaArrow(2, 3)); // Saída: 5

const somaArrow2 = (100, 200);
console.log(somaArrow2); // Saída: 300