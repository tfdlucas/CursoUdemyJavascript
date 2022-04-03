const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

do {
    let numero = numeros[i];

    if (numero === 2) { 
        console.log(`Pulei o número 2...`);
        i++;
        continue; } // Pula o 2 e vai até o final.
    
    console.log(numero);

    if (numero === 7) { 
        console.log(`Número 7 encontrado.`);
        i++
        break; } // Para no 6 e não executa mais nada.

    i++
} while (i < numeros.length);

// Continue - Continua para a próxima iteração
// Break - Sai do laço