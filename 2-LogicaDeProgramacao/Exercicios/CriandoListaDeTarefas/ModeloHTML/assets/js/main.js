const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) { //Keypress - Quando a tecla for selecionada
    if (e.keyCode === 13) { // keyCode (código da tecla) - Código da tecla ENTER é 13
        if (!inputTarefa.value) return; //Se não for digitado nada, não exibe nada
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = ''; // Deixa o input vazio
    inputTarefa.focus(); // Quando clicar no input o cursor continua no input
}

function criaBotaoApagar (li) {
    li.innerText += ' '; // Adiciona um espaço entre o valor da lista e o botão
    const botaoApagar = document.createElement('button'); // Cria um botão
    botaoApagar.innerHTML = 'Apagar'; // Text de dentro do botão
    botaoApagar.setAttribute('class', 'apagar'); // Adiciona uma class com o valor apagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Adiciona um titulo ao botão
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() { // Pega o clic do botão
    if (!inputTarefa.value) return; //Se não for digitado nada, não exibe nada
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target; 

    if (el.classList.contains('apagar')) { // Se o botão clicado for o apagar
        el.parentElement.remove(); // Remove o elemento pai de apagar, no caso o 'li'
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // Pega todos os li
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // .trim - Remove o espaço no final da string
        // Substitui a palavra apagar por nada, deixa vazio
        listaDeTarefas.push(tarefaTexto); // Joga os textos dentro do array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // CONVERTE um elemente JS para uma string no formato JSON
    // É uma string que pode ser convertida em array, posteriormente
    localStorage.setItem('tarefas', tarefasJSON); // Como se fosse uma mini base de dados no navegador
                    //   (nome usado para recuperar o valor 'string, valor)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //Obtém os itens através do nome tarefas
    const listaDeTarefas = JSON.parse(tarefas); // Converte as tarefas de volta para o array
}

adicionaTarefasSalvas();