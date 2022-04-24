//FILTER - Sempre vai retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10 #############
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Maria', idade: 62 },
    { nome: 'Luan', idade: 55 },
    { nome: 'Isabel', idade: 21 },
    { nome: 'Caio', idade: 72 },
    { nome: 'Matheus', idade: 47 },
    { nome: 'Lala', idade: 51},
];

// Retorne as pessoas que tem o nome com 5 letras ou mais #########
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoasComNomeGrande);

// Retorne as pessoas com mais de 50 anos ############
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDe50);

// Retorne as pessoas cujo nome termina com 'a' ##########
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});                            //.endsWith('a') - Termina com 'a'


console.log(nomeTerminaComA);
