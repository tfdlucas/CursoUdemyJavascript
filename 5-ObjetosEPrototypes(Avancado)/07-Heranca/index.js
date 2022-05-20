// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Ligou as duas funções
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        consfigurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Harry Potter', 13, 'Vidro', 5);

caneca.estoque = 10;
camiseta.aumento(100);

console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
