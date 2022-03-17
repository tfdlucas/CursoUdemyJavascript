
const nome = prompt('Digite seu nome completo:');

document.body.innerHTML = `Seu nome é: <b>${nome}<br/>`;
document.body.innerHTML += `Seu nome tem <b>${nome.length}</b> letras.<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nome[1]}</b><br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra "A" no seu nome? <b>${nome.search(/a/)}</b>.<br/>`;
document.body.innerHTML += `Qual o último índice da letra "A" no seu nome? <b>${nome.lastIndexOf('a')}</b>.<br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <b>${nome.slice(-3)}</b>.<br/>`
document.body.innerHTML += `As palavras do seu nome são: <b>${nome.split(' ')}</b><br/>`;

document.body.innerHTML += `Seu nome com letra maiúsculas: <b>${nome.toUpperCase()}</b>.<br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <b>${nome.toLowerCase()}</b>.<br/>`;