function meuEscopo () { // Função principal
    const form = document.querySelector('.form'); // Selecionando Formulário
    const resultado = document.querySelector('.resultado'); // Selecionando Div

    const pessoas = []; // Recebe o envio dos objetos

    function recebeEventoForm (evento) {
        evento.preventDefault(); // Previne o que era pra acontecer por padrão, não envia o formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ // Faz o envio dos objetos para o Array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas); // Exibe o array no console

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        // Exibe no body
    }

    form.addEventListener('submit', recebeEventoForm); 
}


meuEscopo(); // Chamando função principal 