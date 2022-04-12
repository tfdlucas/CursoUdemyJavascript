const conta = function (operador, acumulador, ...numeros) { /// ... rest operator, pega todo o resto
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
            // ...rest
conta('*', 0, 10, 20, 30, 40, 50); // após o 0, o rest pega todos os numeros