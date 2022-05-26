const pessoas = [
    { id: 3, nome: 'Lucas' },
    { id: 2, nome: 'Breno' },
    { id: 1, nome: 'Laís' },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

novasPessoas.delete(1); // Deletar a chave 1

for (const pessoa of novasPessoas) {
    console.log(pessoa); // Vai retornar um array
}

console.log(novasPessoas.get(2)); // Vai retornar a chave 2