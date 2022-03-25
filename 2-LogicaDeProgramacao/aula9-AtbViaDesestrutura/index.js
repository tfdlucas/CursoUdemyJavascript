// ...rest | ... spread
// Usar valor vazio para pular dados do array
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
const [primeiroNumero, segundoNumero, , quartoNumero, ...resto] = numeros; //Resto é o que não foi mencionado

console.log(primeiroNumero, segundoNumero, quartoNumero);
console.log(resto);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numbers[1][2]); // Pega o indice 2 de dentro do indice 1

const [lista1, lista2, lista3] = numbers; // Atribuição via array
console.log(lista2[0]); // Pega o indice 0 de dentro da lis2