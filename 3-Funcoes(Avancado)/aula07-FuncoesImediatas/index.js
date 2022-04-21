// IIFE - Immediately invocked function expression (Criar a função dentro de parenteses)

(function (idade, peso, altura) {
    const sobrenome = 'de Paula';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Lucas'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(23, 70, 1.73); // Idade, Peso, Altura