function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.clear'),

        inicia() {
            this.cliqueBotoes(); // Significa calculadora.cliqueBotoes
            this.pressionaEnter();
        },

        pressionaEnter() { // Realizar a conta com a tecla enter
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida.');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida.');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // O tamanho da string menos um
        },

        cliqueBotoes() {
            // this = calculadora
            document.addEventListener('click', e => { // Arrow function nao altera o valor de 'this'
                const el = e.target; // Reconhece e renorta qual botão foi clicado.
                if (el.classList.contains('btn-num')) { // Se o elemento contem essa classe
                    this.btnParaDisplay(el.innerText); // Usar 'this' pois esse metodo esta dentro de outro metodo
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay(); // Limpa o display
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) { // Recebe o valor apurado por 'innerText'
            this.display.value += valor;  
            this.display.focus(); // Após digitar o numero o foco volta para o display
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();