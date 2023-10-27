/*
- Argumentos que sustenta todos os argumentos enviados.

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);


function funcao(a, b = 2, c = 2) {
    console.log(a + b + c);
}

funcao(2, undefined, 3); // Usando apenas undefined o valor de 'b' não sera alterado.

// Atribuição via desestruturação
function funcao({ nome, sobrenome, idade }) { // Objeto
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Lucas', sobrenome: 'Carvalho', idade: 25 });

function funcao2([valor1, valor2, valor3]) { // Array
    console.log(valor1, valor2, valor3);
}

funcao2(['Gabriel', 'Camargo', 26]);
*/

function restOperator(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

restOperator('+', 1, 20, 30, 40, 50);