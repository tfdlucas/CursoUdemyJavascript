// Uma lista, uma coleção de coisas

const alunos = ['Bhárbara', 'Caliana','Lucas'];
alunos[0] = 'Luiza';  // Altera o valor no array
alunos[3] = 'Bianca'; // Adiciona ao  final do array
alunos.push('Shana'); // Adiciona um novo valor ao final do array
alunos.unshift('Carla'); // Adiciona um novo valor no inicio do array
alunos.shift(); // Remove um elemento do começo 
delete alunos[1]; // Deleta o indice 1 do array (undefined)

let a = [1, 2, 3]; 
let b = [...a]; // B copia os valores de A, independente se A mudar

const removido = alunos.pop(); // Remove o último elemento do array
console.log(removido); // Retorna quem foi removido

console.log(alunos);
console.log(alunos.length); // Exibe o tamanho do array
console.log(alunos instanceof Array); // Verifica se alunos é um array