// São executadas quando uma ação finaliza.

function rand(min = 1000, max = 3000) { // Numero aleatorio
    const num = Math.random() * (max - min + min);
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback(); // Se houver um callback, logo será executado
    }, rand()); // Funcao rand no lugar do valor do temporizador 
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo.');
}

// f1(function () { // Funcao de callback, vai chamar o f2 após o f1 ser finalizado
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo.');
//         });
//     });
// });
