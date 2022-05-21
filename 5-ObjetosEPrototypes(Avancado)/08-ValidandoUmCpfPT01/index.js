let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // Expressão regular que pega tudo que não for número
cpfArray = Array.from(cpfLimpo); // Converte para um array

function Calculo(Contador) {
    for (let valores in cpfArray) {
        valores = Number(cpfArray) * contadorCpf1;
    }
    return console.log(valores);
}

function Contador() {
    for (let contadorCpf1 = 10; contadorCpf1 > 1; contadorCpf1--) {}

    for (let contadorCpf2 = 11; contadorCpf2 > 2; contadorCpf2--) {}
    return;
}