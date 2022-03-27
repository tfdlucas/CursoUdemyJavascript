// For in = lê os índices ou chaves do objeto

// COM OBJECT
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'de Paula',
    idade: 23
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}




// COM ARRAY
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) { // FAZ A LEITURA DOS ÍNDICES
    console.log(frutas[i]);
}