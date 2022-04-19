// Função conhece o local em que foi declarada, e tudo que foi declarado nela e nos vizinhos dela (buscou o 'nome' no pai dela visto que não estava declarado dentro dela)

const nome = 'Lucas'; // Pai

function falaNome() {
    // Se tivesse uma variavel 'nome' aqui dentro, iria sobrepor a variavel pai
    console.log(nome);
}

falaNome();