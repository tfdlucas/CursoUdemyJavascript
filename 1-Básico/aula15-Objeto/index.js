// OBJETO LITERAL
/*
const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'de Paula',
    idade: 23
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


// CRIAR OBJETO ATRAVÉS DE UMA FUNÇÃO

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; // Criando o objeto
}

const pessoa1 = criaPessoa('Lucas', 'de Paula', 23);
console.log(pessoa1.nome);


const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'de Paula',
    idade: 23,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    } // "this" faz referencia a tudo que há no objeto
};

pessoa1.fala();

const a = {
    nome: 'Lucas',
};
const b = {...a}; B copia A, mesmo se A mudar B continua como A antes de mudar

*/