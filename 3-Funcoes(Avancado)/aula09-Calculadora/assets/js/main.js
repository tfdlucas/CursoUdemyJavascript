function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        
        inicia() { // Inicia a calculadora
            this.cliqueBotoes();
        },

        clearDisplay() { // Botão de limpar
            this.display.value = '';
        },

        apagaUm() { // Botão de apagar
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() { 
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida.');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida.');
                return;
            }
        },

        cliqueBotoes() { // Captura os eventos de clique no documento
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) { // Recebe o valor clicado e exibe no display
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); // Inicia a Calculadora