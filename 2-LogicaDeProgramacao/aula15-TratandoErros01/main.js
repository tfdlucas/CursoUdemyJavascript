// PARTE 02
try {
    // É executada quando não há erros
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b); // Erro
    } catch (e) {
        console.log('Deu erro...')
    } finally {
        console.log('Também sou um FINALLY')
    }
} catch (e) {
    // É executada quando há erros
    console.log('Tratando erro');
} finally {
    // Sempre é executaddo, com erro ou sem
    console.log('FINALLY: Eu sempre sou executado');
}
