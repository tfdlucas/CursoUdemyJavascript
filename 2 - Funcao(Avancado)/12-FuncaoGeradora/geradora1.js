// É como um código que pode ser pausado, e depois seguir sendo executado.
// É uma avaliação preguiçosa.
// Usar 'yield' ao invés de 'return'
// Necessario usar '.next()' que é um método dentro do objeto gerador, para ver o alor
// Usar 'return' faz com que a função termine no return
function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer..
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);