//               -5       -4      -3          -2        -1
//                0        1       2           3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Yúlia'];

// nomes.splice(índice atual, quantidade delete, el01, el02, el03);

// const removidos = nomes.splice(2, 1, 'Caliana'); 
                            // Adicionou caliana no lugar de eduardo(indice 2)

// pop - remover 
const removidos = nomes.splice(-1, 1);

//shift - elimina o primeiro elemento
const removidos = nomes.splice(0, 1);

// unshift - adiciona no começo do array
nomes.splice(0, 0, 'Lucas', 'Giordano'); 

// // push - Adiciona um elemnto ao final do array
nomes.splice(nomes.length, 0, 'Lucas');

console.log(nomes, removidos);