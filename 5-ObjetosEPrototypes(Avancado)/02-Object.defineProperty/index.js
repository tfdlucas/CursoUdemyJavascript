// defineProperty - define uma
// defineProperties - define mais de uma

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Insere a variável na lista de objetos
        value: estoque, // Exibe o valor do 'estoque' na lista apresentada
        writable: false, // Se o valor pode ou não ser alterado
        configurable: false // Configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 59.99, 3);
p1.estoque = 50; // Não vai funcionar por causa do valor 'false' em 'writable'
delete p1.estoque; // Não vai funcionar por causa de 'false' em 'configurable'
console.log(p1);