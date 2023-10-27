// Declaracao de funcao
falaOi(); // Function hoisting - possivel ser chamada antes de declarar

function falaOi() {
    console.log('Oiee');
}

// Fist-class objects ( Objetos de primeira classe)

const souUmDado = function () { // Function expression
    console.log('sou um dado.');
};
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();