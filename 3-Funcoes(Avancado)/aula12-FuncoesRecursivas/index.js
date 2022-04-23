// Ela executa o código dela e se chama de volta
// Estabelecer quando ela deve parar de se chamar

function recursiva (max) {
    if (max === 10) return; // Vai parar de se chamar
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);