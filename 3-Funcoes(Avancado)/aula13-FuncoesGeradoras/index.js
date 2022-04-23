// yield - deixa o código dentro da função seguir executando
// return - faz com que o código pare no return

function* geradora1() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';

}

function* geradora2() { // Vai gerar números eternamente
    let i = 0;

    while(true) {
     yield i;
     i++;   
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); 
    // Delegou para a 'geradora3' fazer '1,2,3' e a 'geradora4' seguir a sequencia
    yield 3; // Continuando a sequencia de 'geradora3'
    yield 4;
}

function* geradora5() {
    yield () => {
        console.log('Vim do yield 1.');
    };

    yield () => {
        console.log('Vim do yield 2.');
    };
}

// const g2 = geradora2();
// const g4 = geradora4();
// console.log(g2.next().value);

// for (let valor of g4) {
//     console.log(valor);
// }

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();