// Resolução do Professor

const h1 = document.querySelector('#container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
h1.innerHTML += `<br/>${data.getHours()}:${data.getMinutes()}`;