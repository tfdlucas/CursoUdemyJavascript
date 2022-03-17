const nome = 'Bernardo';
const sobrenome = 'Lanes';
const idade = 23;
const peso = 59;
const altura = 1.67;
let anoNascimento = 2022 - idade;
let indiceMassaCorporal = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);