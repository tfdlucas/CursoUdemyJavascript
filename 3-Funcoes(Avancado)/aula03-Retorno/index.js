// return - reetorna um valor, termina a função

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

// function criaPessoa (nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa('Lucas', 'de Paula');
// const p2 = criaPessoa('Bianca', 'Lanes');

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase (comeco) {
//     function falaResto (resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3); // Vezes que multiplicara o numero
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // Numero que será duplicado
console.log(triplica(2));
console.log(quadriplica(2));
