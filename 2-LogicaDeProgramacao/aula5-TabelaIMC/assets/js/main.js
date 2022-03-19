const form = document.querySelector('.form'); // Captura do formulário

    form.addEventListener('submit', function (e) { // Adicionou o evento de 'submit' no formulário
        e.preventDefault();  // Para travar o envio do formulário
        
        // e.target mostra qual elemento foi clicado na página
        const inputPeso = e.target.querySelector('.input-peso'); 
        const inputAltura = e.target.querySelector('.input-altura');

        const peso = Number(inputPeso.value); // Converte o input para Number
        const altura = Number(inputAltura.value); // Converte o input para Number

        if (!peso) {
            setResultado(`Peso inválido.`, false) // False retorna para o isValid p ter fundo red
            return // Se o peso for diferente de number, vai enviar a mensagem e parar a funcao
        }

        if (!altura) {
            setResultado(`Altura inválida.`, false) // False retorna para o isValid p ter fundo red
            return // Se a altura for diferente de number, vai enviar a mensagem e parar a funcao
        }

        const imc = getImc(peso, altura); // Const é a funcao getImc que recebe peso e altura
        const nivelImc = getNivelImc(imc); // Recebe a função getNivelImc que contém o array 

        const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Define msg

        setResultado(msg, true); // Chama a função setResultado
    });

    function getNivelImc (imc) { // Recebe o valor do imc
        const nivel = ['Abaixo do peso', // 0
                        'Peso normal', // 1
                        'Sobrepeso',  // 2
                        'Obesidade grau 1', // 3
                        'Obesidade grau 2', // 4
                        'Obesidade grau 3'] // 5

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5)  return nivel[0];
    }

    function getImc (peso, altura) { // Recebe peso e altura e faz o cálculo do IMC
        const imc  = peso / altura ** 2;
        return imc.toFixed(2); // Retorna o IMC com 2 casas decimais
    }

    function criaParagrafo () {
        const p = document.createElement('p'); // Criação de um paragrafo
        return p;
    }

    function setResultado (msg, isValid) { // Verifica se o resultado é true ou false
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = ''; // O que for enviado no (msg) vem parar aqui no html do resultado
        const p = criaParagrafo();

        if (isValid) {
            p.classList.add('verde'); // Cria classe para estilizar no css (Verde)
        } else {
            p.classList.add('vermelho'); // Cria classe para estilizar no css (Vermelho)
        }

        p.innerHTML = msg; // Exibe a msg = p
        resultado.appendChild(p); // Adiciona o paragrafo dentro do resultado 
    }