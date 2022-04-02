class Pessoa {
    constructor() {
        this.nome = "Lucas";
    }
    hello() {
        return `Hello Pessoa!`;
    }
}

function objeto() {
    let pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto();