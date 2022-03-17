alert('Olá, digite dois números para fazer a soma deles.');

let numero1 = prompt('Digite o primeiro número:');
let numero2 = prompt('Digite o segundo número:');

numero1 = Number(numero1);
numero2 = Number(numero2);

const resultado = numero1 + numero2;

alert(`A soma de ${numero1} + ${numero2} é igual a ${resultado}.`);

// alert(`A soma de ${numero1} + ${numero2} é igual a ${numero1 + numero2}.`);
// Desse modo não seria necessário a const resultado.