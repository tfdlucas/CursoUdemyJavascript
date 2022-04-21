// Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc() { // Por causa do 'get' o imc passa a se 'passar' por um atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Lucas', 'de Paula', 1.75, 70);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc); // Não vai parenteses após o imc por  causa da inserção do get
console.log(p1.nomeCompleto);