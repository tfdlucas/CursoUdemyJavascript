// Atribuição Usando Objetos

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'de Paula',
    idade: 23,
    endereco: {
        rua: 'Alvaro Batista',
        numero: 305
    }
};

// const nome = pessoa.nome;
// OU
const { idade } = pessoa; // Atribuição via desestruturação
//  const { pais = ''} = pessoa; Caso não exista valor, pode ser colocado valor vazio para undefined

const { endereco: { rua, numero } } = pessoa;
const { nome: n} = pessoa; // Trocou o nome da variavel 'nome' por 'n' 
console.log(idade, rua, numero, n);
console.log(pessoa['nome']);

const { nome, ...rest } = pessoa;
console.log(rest); // Pega tudo menos o nome