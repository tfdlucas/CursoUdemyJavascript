// Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Caliana');

console.dir(funcao());
console.dir(funcao2());