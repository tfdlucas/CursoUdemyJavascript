// Construtor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Trava a variável, fazendo com que fique impossivel mudar o seu valor
}

const p1 = new Pessoa('Lucas', 'Carvalho');

const p2 = new Pessoa('Bianca', 'Maíne');

console.log(p1);
console.log(p2);

// A palavra 'new' vai criar um objeto vazio, depois vai atrelar a palavra/variável 'this' dentro do objeto, o que vai variar de pessoa para pessoa.