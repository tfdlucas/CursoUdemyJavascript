// Maneiras de declarar Funções

/* Declaração de função 
 Function hoisting - Pode ser chamada antes de ser declarada */
falaOi();
function falaOi() {
    console.log('Oiee');
}

/* First-class objects (Objetos de primeira classe)
 Function expression */
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() { // Também poderia ser - falar: function ()
        console.log('Estou falando...');
    }
};
obj.falar();