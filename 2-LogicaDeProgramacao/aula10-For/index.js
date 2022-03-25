/*

for (variavel de controle; condição; incremento) {
    ação
}


Pode ser 'i--' para retroceder
Pode ser 'i += 10' para pular de 10 em 10


*/


// i = index
for (let i = 0; i <= 5; i++) { 
    console.log(`Line ${i}`);
}


/* SE É PAR OU ÍMPAR

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}
 
*/

// Percorrendo Array

const frutas = [ 'Banana', 'Morango', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}