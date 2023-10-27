// Filter = Sempre vai retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10); // Função de callback

console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luca', idade: 25 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosa', idade: 62 },
    { nome: 'Wallace', idade: 47 },
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoasComNomeGrande);
// Retorne as pessoas com mais de 50 anos
const pessoasMais50 = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasMais50);
// Retorne as pessoas cujo nome termina com 'a'
const pessoasTerminaComA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
    //              minúsculo     função 'termina com'
});

console.log(pessoasTerminaComA);