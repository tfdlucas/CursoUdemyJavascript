const data = new Date();
let diaSemana = data.getDay();
let diaSemanaText;

switch (diaSemana) {
case 0:
    diaSemanaText = 'Domingo';
    break;
case 1:
    diaSemanaText = 'Segunda-feira';
    break;
case 2: 
    diaSemanaText = 'Terça-feira';
    break;
case 3:
    diaSemanaText = 'Quarta-feira';
    break;
case 4:
    diaSemanaText = 'Quinta-feira';
    break;
case 5:
    diaSemanaText = 'Sexta-feira';
    break;
case 6:
    diaSemanaText = 'Sábado';
    break;
default:
    diaSemanaText = '';
}

console.log(diaSemana, diaSemanaText);