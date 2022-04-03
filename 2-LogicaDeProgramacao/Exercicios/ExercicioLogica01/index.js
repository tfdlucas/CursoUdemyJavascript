// Escreva uma função que recebe 2 números e retorne o maior deles

const min = 1;
const max = 10;

function random (min, max) { // Gera o número aleatório
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


let randMin = random(min, max);
let randMax = random(min, max); 

function roleta (randMin, randMax) { // Faz a checagem do maior número
    if (randMin > randMax) {
        return console.log(`${randMin} é maior que ${randMax}.`);
    } else if (randMax > randMin) {
        return console.log(`${randMax} é maior que ${randMin}`);
    } else if (randMin === randMax) {
        return console.log(`${randMin} e ${randMax} são iguais.`);
    }
}

roleta(randMin, randMax);