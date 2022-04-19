// OBJETIVO - Exibir f1, f2, f3 nessa ordem, mesmo gerando tempos aleatórios

function rand(min = 1000, max = 3000) { // Gera numero aleatório entre 1 e 3 segundos
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback(); // Chama o CALLBACK
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback(); // Chama o CALLBACK
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback(); // Chama o CALLBACK
    }, rand());
}

f1(function () { // CALLBACK
    f2(function () {
        f3(function () {
            console.log('Olá Mundo!');

        });
    });
});
