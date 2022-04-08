// PARTE 01

function soma (y, x) {
    if (typeof y !== 'number' || typeof x !== 'number') {
        //throw ('y e x preciisam ser números'); // Lançando erros com uma string
        //throw new Error('y e x precisam ser números'); // Lançamento de erro do JS 
        throw ReferenceError('y e x precisam ser números'); //Lançamento por referencia
        
    }

    return y + x;
}

try { // Verificar se há erro no código
    console.log(soma(2, 4)); // Valor sem erro
    console.log(soma('2', 4)); // Valor com erro
} catch (erro) { // Se houver erro retornará isto..
    console.log(erro); // Exibe onde está o erro, não recomendavel o usuário ver o erro, pois ele provavelmenete não entendera, exibir entao algo mais amigavel..
    console.log('Algo mais amigavel');
}