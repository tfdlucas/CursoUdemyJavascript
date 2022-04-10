function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        // Recebe os segundos, cria data, e retorna a data
        const data = new Date(segundos * 1000); // Converte os segundos para millisegundos
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC' // Hora zerada
        });
    }

    function iniciaRelogio() { // Executa a cada 1 segundo
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) { // Captura os clics no documento e    seleciona os botões no HTML substituindo o querySelector
        const element = e.target; // Recebe os locais clicados no documento

        if (element.classList.contains('reiniciar')) { // REINICIAR
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado'); //Remove a classe do css com cor red no p
            segundos = 0; // Para reiniciar do zero, e não de onde parou
        }

        if (element.classList.contains('iniciar')) { // INICIAR
            relogio.classList.remove('pausado');  //Remove a classe do css com cor red no p
            clearInterval(timer); //Não da bug de acelerar a contagem qnd clicar no iniciar
            iniciaRelogio(); // Chama a função
        }

        if (element.classList.contains('pausar')) { // PAUSAR
            clearInterval(timer);
            relogio.classList.add('pausado'); //Adiciona a classe css com cor red no p
        }
    })
}

relogio();