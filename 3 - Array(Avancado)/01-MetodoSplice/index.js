const nomes = ['Maria', 'Clara', 'Roberta', 'Yulia', 'Beatriz'];

const removidos = nomes.splice(3, 2); // Remove a partir indice 3, apenas 2 elemento

//Simulando Unshift - Insere no inicio
nomes.splice(0, 0, 'Gabriela', 'Antonia');
//Simulando Push - Insere no final
nomes.splice(nomes.length, 0, 'Babi', 'Jéssica');

console.log(nomes, removidos);
