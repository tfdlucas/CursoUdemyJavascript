function Pessoa() {
    this.nome = "Lucas";
    this.hello = function () {
        return `Hello Pessoa!`;
    }
}

function objeto1() {
    let pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto1();