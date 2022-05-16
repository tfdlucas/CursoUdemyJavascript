const pessoa1 = new Object();
pessoa1.nome = 'Lucas Carvalho';
pessoa1.idade = 24;

pessoa1.falarNome = function() {
    return (`${this.nome} etá falando seu nome.`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) { // EXibe tudo que há dentro de pessoa1
    console.log(chave);
}

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());