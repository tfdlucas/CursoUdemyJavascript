function soma (a, b) {
    return a + b;
}

function multiplicacao (a, b) {
    return a * b;
}

function executar (funcao, a, b) {
    return funcao(a, b);
}

let resultado = executar(soma, 1, 2);

console.log(resultado);