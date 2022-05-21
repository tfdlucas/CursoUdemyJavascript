// cpf 1 - 705.484.450-52 
// cpf 2 - 070.987.720-03

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, ''); // Expressão regular que pega tudo que não for número
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false; // Se o CPF não for enviado
    if(this.cpfLimpo.length !== 11) return false; // Se o tamanho do CPF for menor que 11
    if(this.isSequencia()) return false; // Se retornar uma sequencia 'true', vai retornar false

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial); // Converte para um array
    let regressivo = cpfArray.length + 1; // Pega o tamanho do cpf e adiciona 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('CPF válido.');
} else {
    console.log('CPF inválido.');
}