// é preciso iniciar com letra maiúscula
// é preciso chamar a palavra 'new'
// New - cria um novo objeto vazio, faz o 'this' apontar para o objeto vazio e já faz o papel do 'return'

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método.');
    };
}

const p1 = new Pessoa('Lucas', 'de Paula');
const p2 = new Pessoa('Bianca', 'Maíne');

console.log(p1.nome, p2.sobrenome);
p1.metodo();