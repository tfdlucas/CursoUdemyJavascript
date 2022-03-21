function getDiaSemanaText (diaSemana) {
    let diaSemanaText;

    switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        return diaSemanaText;
    case 1:
        diaSemanaText = 'Segunda-feira';
        return diaSemanaText;
    case 2: 
        diaSemanaText = 'Terça-feira';
        return diaSemanaText;
    case 3:
        diaSemanaText = 'Quarta-feira';
        return diaSemanaText;
    case 4:
        diaSemanaText = 'Quinta-feira';
        return diaSemanaText;
    case 5:
        diaSemanaText = 'Sexta-feira';
        return diaSemanaText;
    case 6:
        diaSemanaText = 'Sábado';
        return diaSemanaText;
    default:
        diaSemanaText = '';
        return diaSemanaText;
    }
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay() + 2;
const diaSemanaText = getDiaSemanaText(diaSemana);

console.log(diaSemana, diaSemanaText);