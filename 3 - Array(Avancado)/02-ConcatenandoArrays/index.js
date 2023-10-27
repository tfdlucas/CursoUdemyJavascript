// Maneira 01 - Concat
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// Método para concatenar a1 no a2 e inseriu 7, 8 e 9 no final
const a3 = a1.concat(a2, [7, 8, 9]);

console.log(a3);

// Maneira 02 - Spread 
// Espalhando array 1 e 2 dentro do array 4, e adicionando novos valores
const a4 = [...a1, 'Lucas', ...a2, ...[7, 8, 9]];
console.log(a4);