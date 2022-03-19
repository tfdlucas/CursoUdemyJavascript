function meuEscopo () { // Função Principal
    const peso = peso.querySelector('.input-peso');
    const altura = altura.querySelector('.input-altura'); 
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm (evento) {
        evento.preventDefault(); // Não envia o formulário
        
        peso = Number(peso);
        altura = Number(altura);
        const imc = peso / (altura * altura);

        if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo(); // Chamando Função Principal