// IIFE - Immediately invoked function expression (Envolta em parenteses)

(function (idade, peso, altura) { // Parametro
    const sobrenome = 'Carvalho';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(25, 70, 1.76); // Argumentos