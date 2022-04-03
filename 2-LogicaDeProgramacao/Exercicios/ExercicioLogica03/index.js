// Escreva uma função que recebe um número e retorne o seguinte.
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisiivel por 3 ou 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com número de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero; // Se é numero ou nao
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a')); // Verificando se é um numero
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}