// A função reduce() é utilizada para percorrer todos os elementos do array e acumular os valores.
// Array.prototype.reduce(function(valorAcumulado, valorAtual, index, array)[, initialValue])

let numeros = [1, 2, 3];
// Não foi informado o valor inicial
// Neste caso, o primeiro item do array será ignorado e passado como o valor inicial
let s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2);

console.log(s);

// Aqui informamos o valor inicial como 0. Nesse caso, todos os itens serão processados
s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n * 2, 0);

console.log(s);