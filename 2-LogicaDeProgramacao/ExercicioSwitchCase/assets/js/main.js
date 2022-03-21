function getDiaSemanaText (diaSemana) {
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
        diaSemanaText = ``;
        return diaSemanaText;
    }
}

function getMesAtual (mesAtual) {
    let mesAtualText;

    switch (mesAtual) {

    }
}

const retorno = document.querySelector('#container');

const dataAtual = new Date(); // Pega a data atual 
const diaSemana = dataAtual.getDay(); //Pega o dia da semana dentro da data
const diaSemanaText = getDiaSemanaText(diaSemana); // Retorno da função do dia da semana
const mesAtual = dataAtual.getMonth(); // Pega o mes de dentro da data
const mesAtualText = getMesAtual(mesAtual); // Retorno da função do mês
const anoAtual = dataAtual.getFullYear(); // Pega o ano atual

retorno.innerHTML = `${diaSemanaText}, ${diaSemana} de ${mesAtualText} de ${anoAtual} `;