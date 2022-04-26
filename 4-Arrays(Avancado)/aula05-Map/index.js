// map - vai alterar valores no array

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));

// Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice + 1; // +1 para não começar do número 0
    return obj;
});

console.log(comIds);