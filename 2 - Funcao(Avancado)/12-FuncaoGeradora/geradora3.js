function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Está fazendo uso da geradora3
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}
// Não é necerrario chamar a geradora 3, visto que a geradora 4 faz uso da mesma.