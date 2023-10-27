/*
const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML = `Seu nome é: <b>${nome}</b><br>`;
document.body.innerHTML += `Seu nome tem <b>${nome.length}</b> letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nome[1]}</b>.<br>`;
document.body.innerHTML += `Qual o primeiro índice da letra "A no seu nome? <b>${nome.search(/a/)}</b>.<br>`;
document.body.innerHTML += `Qual o último índice da letra "A" no seu nome? <b>${nome.lastIndexOf('a')}</b>.<br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${nome.slice(-3)}</b>.<br>`;
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(' ')}</b>.<br>`;
document.body.innerHTML += `Seu nome com letra maiúscula é: <b>${nome.toUpperCase()}</b>.<br>`;
document.innerHTML += `Seu nome com letra minúscula é: <b>${nome.toLowerCase()}</b>.<br>`;


const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


const alunos = ['Bhárbara', 'Giovana', 'Luisa'];
alunos[0] = 'Luisa';
alunos[3] = 'Rafaela';

alunos.push('Milena');
alunos.unshift('Vitória');
alunos.shift();
delete alunos[1];

let a = [1, 2, 3];
let b = [...a];

const removido = alunos.pop();

console.log(removido);
console.log(alunos);
console.log(alunos.length);
console.log(alunos instanceof Array);
*/

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

const raizN = n => n ** 0.5;

console.log(raizN(25));


const soma = n => n + Number(5);

console.log(soma(5));