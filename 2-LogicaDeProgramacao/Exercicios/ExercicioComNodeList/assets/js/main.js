const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //Pega todos os elementos 'p' que estão na div

const estilosBody = getComputedStyle(document.body); //Pega todo o css computado no body
const backgroundColorBody = estilosBody.backgroundColor; //Pega a cor de fundo do body

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}