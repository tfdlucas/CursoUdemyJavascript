//  A função filter() filtra os elementos do array e somente os elementos que satisfizerem à condição serão adicionados ao novo array

let numeros = [1, 2 , 3];
let numeros2 = numeros.filter(n => n > 1);

console.log(numeros2);
// Esse código vai criar um array com apenas números maiores que 1