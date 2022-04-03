// const nome = 'Lucas';
// let control = 0;

// while (control < nome.length) {
//     console.log(nome[control]);
//     control++;
// }

// WHILE
function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // Retorna número inteiro
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) { // Quando for igual a 10 vai sair do laço
    rand = random(min, max);
    console.log(rand);
}

console.log(`##############`);

// DO WHILE - Executa o código e depois checa a condição
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
