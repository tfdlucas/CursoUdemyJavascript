// É a habilidade que a função tem em acessar o seu escopo léxico

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Shane');

console.dir(funcao());
console.dir(funcao2());

console.log(funcao(), funcao2());