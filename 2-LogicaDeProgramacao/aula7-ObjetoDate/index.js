/*
// 01/01/1970 Timestamp unix ou época unix
// Necesário pelo menos dois parametros

//                  (ano, mes, dia, hora, minuto, segundo, milisegundo)
// const dataString = new Date('2022-04-02 20:20:59');
// console.log(dataString.toString());

const data = new Date(2021, 2, 21, 23, 12, 36, 989);

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('MiliSegundos', data.getMilliseconds());
console.log('DiaDaSemana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
*/