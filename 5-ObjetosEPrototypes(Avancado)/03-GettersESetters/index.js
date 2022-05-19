function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Insere a variável na lista de objetos
        configurable: true, // Configurável
        get: function () {
            return estoque;
        },
        set: function (valor) { // Faz a validação
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value');
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'Sol';
console.log(p1.estoque);