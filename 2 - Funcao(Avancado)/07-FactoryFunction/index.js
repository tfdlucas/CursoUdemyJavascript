// Funcoes que retornam objetos
// Factory functions

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // Divide o nome pelos espacos e transforma em um array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nomeCompleto} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() { // Faz com que o imc se passe por um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'Carvalho', 1.8, 80);
// console.log(p1.imc);
p1.nomeCompleto = 'Luiza Sanchez Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);