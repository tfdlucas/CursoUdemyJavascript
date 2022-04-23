function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el); // Elemento do display
            if (el.classList.contains('btn-clear')) this.clear(); // Captura do clear
            if (el.classList.contains('btn-del')) this.del(el); // Captura do delete
            if (el.classList.contains('btn-eq')) this.realizaConta(el); // Botão de igual
        });
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida.');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida.');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText; // Retorno no display
        this.display.focus(); // Remove o foco do último botão pressionado
    };

    this.clear = () => this.display.value = ''; // Botão limpar, adiciona um valor vazio
    this.del = () => this.display.value = this.display.value.slice(0, -1); // Botão deletar um número
}

const calculadora = new Calculadora();
calculadora.inicia();