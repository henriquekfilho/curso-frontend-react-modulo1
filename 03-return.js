function dobro(numero) {
    return numero * 2;
    console.log('Código após o return não é executado');
}
console.log(dobro(100));
console.log(dobro(15));

const resultado = dobro(30);
console.log(resultado);

//É maior de idade ou não usando function e return

function verificarIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }}
console.log(verificarIdade(20));
console.log(verificarIdade(15));
console.log(verificarIdade(18));

//Simplificando a função verificarIdade

function verificarIdade(idade) {
    return idade >= 18;
}
console.log(verificarIdade(20));
console.log(verificarIdade(15));
console.log(verificarIdade(18));