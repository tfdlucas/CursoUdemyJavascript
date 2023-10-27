const nomes = ['Maria', 'Clara', 'Roberta', 'Yulia', 'Beatriz'];
const removidos = nomes.splice(3, 2, 'Ana', 'Sophia');
// Vai substituir o indice 3 e 4 pelos valores Ana e Sophia
console.log(nomes, removidos);