//Atividade - Preço com desconto em porcentagem

function calcularDesconto(preco, desconto) {
    const valorDesconto = (preco * desconto) / 100;
    const precoFinal = preco - valorDesconto;
    return precoFinal;
}
console.log(calcularDesconto(100, 10)); // Saída: 90

//reescrevendo a função usando arrow function
const calcularDescontoArrow = (preco, desconto) => preco - (preco * desconto) / 100;
console.log(calcularDescontoArrow(100, 20)); // Saída: 80