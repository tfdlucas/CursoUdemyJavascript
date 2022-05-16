const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Carvalho'
};

delete pessoa.nome;

console.log(pessoa['nome']); // anotação de colchetes
console.log(pessoa.sobrenome); // anotação de ponto

// O exemplo abaixo só é possivel com anotação de colchetes
const chave = 'nome';
console.log(pessoa[chave]);