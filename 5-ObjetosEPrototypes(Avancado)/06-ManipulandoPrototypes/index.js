// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__ : objA
};

const objC = new Object();
objC.chaveC = 'C';

// Configuração
Object.setPrototypeOf(objB, objA); // (quem será configurado, quem será o prototype)
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);