function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); // Repete a cada segundo

setTimeout(function () {
    clearInterval(timer);
}, 3000); // Vai para o timer depois de 3 segundos

setTimeout (function (){
    console.log('Olá Mundo!');
}, 5000); // Exibe a msg depois de 5 segundos