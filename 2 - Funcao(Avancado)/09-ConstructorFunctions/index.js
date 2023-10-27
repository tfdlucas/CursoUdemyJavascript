function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function () { };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ':Sou um método');
    };
}


const p1 = new Pessoa('Lucas', 'Shane');
const p2 = new Pessoa('Marina', 'Shane');

p1.metodo();
p2.metodo();