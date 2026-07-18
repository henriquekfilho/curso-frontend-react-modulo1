const numeroUm = 50;
const numeroDois = 30;

let resultado = 0

//soma:
resultado = numeroUm + numeroDois;
console.log(`O resultado da soma é: ${resultado}`);

//subtração:
resultado = numeroUm - numeroDois;
console.log(`O resultado da subtração é: ${resultado}`);

//multiplicação:
resultado = numeroUm * numeroDois;
console.log(`O resultado da multiplicação é: ${resultado}`);

//divisão:
resultado = numeroUm / numeroDois;
console.log(`O resultado da divisão é: ${resultado}`);

//potência:
resultado = 2 ** 3;
console.log(`O resultado da potência é: ${resultado}`);

//raiz quadrada:
resultado = Math.sqrt(64);
console.log(`O resultado da raiz quadrada é: ${resultado}`);

//resto da divisão:
resultado = 8 % 5;
console.log(`O resultado do resto da divisão é: ${resultado}`);


if(true && true){
    console.log("Verdadeiro1");
}
if(true || false){
    console.log("Verdadeiro2");
}

let contadorCliques = 0;
contadorCliques = contadorCliques + 1;  //1
contadorCliques = contadorCliques + 1;  //2
contadorCliques = contadorCliques + 1;  //3
contadorCliques = contadorCliques + 1;  //4
contadorCliques++;  //5
contadorCliques--;  //4
contadorCliques += 10; //14
contadorCliques -= 5; //9
contadorCliques *= 2; //18
contadorCliques /= 3; //6
console.log(`O contador de cliques é: ${contadorCliques}`);