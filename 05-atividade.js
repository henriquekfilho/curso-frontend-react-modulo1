//função de média de dois numeros (nota1 e nota2)
function media(nota1, nota2) {
    const soma = nota1 + nota2;
    const media = soma / 2;
    return media;
}

//otimizando a função de média com arrow function
const mediaArrow = (nota1, nota2) => {
    const soma = nota1 + nota2;
    return soma / 2;
};

console.log(media(7, 8));
console.log(mediaArrow(7, 8));