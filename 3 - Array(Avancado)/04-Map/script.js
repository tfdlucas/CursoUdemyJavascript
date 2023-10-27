// Map = Altera os valores e retorna um array do mesmo tamanho que o original.

// Dobre os valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

// Para cada elemento:
const pessoas = [
    { nome: 'Luca', idade: 25 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosa', idade: 62 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(obj => `${obj.nome}`);
const nomeString = nomePessoa.join(' ');
console.log(nomeString);

// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
// Preciso envolver o objeto em parenteses para nao apresentar erro, 
// pq as chaves do objeto iam fazer o papel das chaves da funcao.
console.log(idades);

// Adicione uma chave id em cada elemento
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj }; // Necessário para não alterar o objeto original.
    newObj.id = indice;
    return newObj;
});

console.log(comIds);