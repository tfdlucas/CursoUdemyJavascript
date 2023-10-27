// É uma função que chama a si mesma de volta.
// Tem um limite maximo de vezes que pode ser usado.

function recursiva(max) {
    console.log(max);
    if (max >= 1000) return;
    max++;
    recursiva(max); // Chamando a si mesma de volta
}

recursiva(0);