// Valor por referência
// const nomes = new Array('Eduardo', 'Mõnica', 'Beatriz'); Menos usado (Construtor)

const nomes = ['Lucas', 'Maria', 'Duda', 'Fernando', 'Isadora'];
// const novo = nomes; // O que for feito em 'novo' impacta em 'nomes'
// const novo = [...nomes]; // Copiou nomes para dentro de novo, assim o que for feito em 'novo' não impacta em 'nomes'
const novo = nomes.slice(1, 3); 
// Fatia o array, mas termina um número antes do valor final(2)


nomes[2] = 'Bernardo'; // Substitui o index 2
nomes.pop(); // Remove o último elemento
nomes.shift(); // Remove o primeiro elemento
nomes.push('Abel'); // Adiciona o elemento ao final do array
nomes.unshift('Andreia'); // Adiciona o elemento ao inicio do array
delete nomes[2]; // Remove o valor mas o índice permanece(vazio)

console.log(novo);
console.log(nomes.length); // Exibe quantos elementos o array possui

// #####################

const pessoa = 'Lucas Carvalho de Paula';
const names = pessoa.split(' '); 
// Vai separa no espaço ' ', convertendo a string para um array
// const names2 = pessoa.join(' '); // Vai juntar, convertendo o array para uma string

console.log(names);