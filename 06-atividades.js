//Cofrinho de viagem
//Cenário: você quer juntar R$100 para uma viagem e guarda R$15 no cofrinho
//        a cada semana. Faça um programa que calcule quantas semanas você vai precisar para juntar o dinheiro necessário.
let cofrinho = 0;
const deposito = 15;
let semanas = 0;
while (cofrinho < 100) {
  cofrinho += deposito;
  semanas++;
  console.log(`Semana: ${semanas}: R$${cofrinho}`);
}
console.log(`Você precisará de ${semanas} semanas para juntar R$100,00.`);