// Especifico para objetos literais(string, array) pq tem índices, retorna o valor

const nome = 'Lucas de Paula';

for (let valor of nome) {
    console.log(valor);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis)