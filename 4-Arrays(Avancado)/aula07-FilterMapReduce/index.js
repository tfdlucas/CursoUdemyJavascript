// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pairNumbers = numbers
    .filter(value => value % 2 === 0) // Vai pegar os pares
    .map(value => value * 2) // Vai dobrar os valores
    .reduce((ac, value) => ac + value)  // Vai acumular

console.log(pairNumbers);