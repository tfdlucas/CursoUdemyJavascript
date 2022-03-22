// Minha Resolução

const retorno = document.querySelector('#container h1'); // Captura o ID do HTML
const dataAtual = new Date(); // Pega a data atual 


function getDiaSemanaText (diaSemana) { // Converte o número do dia da semana para o nome
    let diaSemanaText;

    switch (diaSemana) {
    case 0:
        diaSemanaText = `Domingo`;
        return diaSemanaText;
    case 1:
        diaSemanaText = `Segunda-feira`;
        return diaSemanaText;
    case 2:
        diaSemanaText = `Terça-feira`;
        return diaSemanaText;
    case 3:
        diaSemanaText = `Quarta-feira`;
        return diaSemanaText;
    case 4:
        diaSemanaText = `Quinta-feira`;
        return diaSemanaText;
    case 5:
        diaSemanaText = `Sexta-feira`;
        return diaSemanaText;
    case 6:
        diaSemanaText = `Sábado`;
        return diaSemanaText;
    default:
        diaSemanaText = ` `;
        return diaSemanaText;
    }
}

function getMesAtual (mesAtual) { // Converte o número do mês para o nome
    let mesAtualText;

    switch (mesAtual) {
    case 0:
        mesAtualText = `Janeiro`;
        return mesAtualText;
    case 1:
        mesAtualText = `Fevereiro`;
        return mesAtualText;
    case 2:
        mesAtualText = `Março`;
        return mesAtualText;
    case 3:
        mesAtualText = `Abril`;
        return mesAtualText;
    case 4:
        mesAtualText = `Maio`;
        return mesAtualText;
    case 5:
        mesAtualText = `Junho`;
        return mesAtualText;
    case 6:
        mesAtualText = `Julho`;
        return mesAtualText;
    case 7:
        mesAtualText = `Agosto`;
        return mesAtualText;
    case 8:
        mesAtualText = `Setembro`;
        return mesAtualText;
    case 9:
        mesAtualText = `Outubro`;
        return mesAtualText;
    case 10:
        mesAtualText = `Novembro`;
        return mesAtualText;
    case 11:
        mesAtualText = `Dezembro`;
        return mesAtualText;
    default:
        mesAtualText = ` `;
        return mesAtualText;
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // Função para adicionar o número 0
}

function criaData (dataAtual) {
    const diaSemana = dataAtual.getDay(); //Pega o dia da semana dentro da data
    const diaSemanaText = getDiaSemanaText(diaSemana); // Retorno da função do dia da semana
    const mesAtual = dataAtual.getMonth(); // Pega o mes de dentro da data
    const mesAtualText = getMesAtual(mesAtual); // Retorno da função do mês
    const horarioAtual = zeroAEsquerda(dataAtual.getHours()); // Pega a hora
    const minutosAtual = zeroAEsquerda(dataAtual.getMinutes()); // Pega os minutos

    return retorno.innerHTML = `${diaSemanaText}, ${diaSemana} de ${mesAtualText} de 
    ${dataAtual.getFullYear()} <br/> ${horarioAtual}:${minutosAtual}`; 
}

criaData(dataAtual); // Chama a Função