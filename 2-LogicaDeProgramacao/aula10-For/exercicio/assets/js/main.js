const elementos = [ // Array com objeto dentro
    {tag: 'p',       texto: 'Frase 01'}, // 0 i
    {tag: 'div',     texto: 'Frase 02'}, // 1 i
    {tag: 'footer',  texto: 'Frase 03'}, // 2 i
    {tag: 'section', texto: 'Frase 04'}  // 3 i
];

const container = document.querySelector('.container'); // Selecionou o container no HTML
const div = document.createElement('div'); // Cria uma div, que virá a ser um filho da classe container!

for (let i = 0; i < elementos.length; i++)  {
    let { tag, texto } = elementos[i]; // Atribuição via desest
    let tagCriada = document.createElement(tag); // Cria elementos baseados nas tags do array no HTML

    tagCriada.innerHTML = texto; // Exibe o texto contido no array

    div.appendChild(tagCriada); // Div que ja foi criada recebendo um filho 'tagCriada'
}

container.appendChild(div); // Container recebe o filho 'div'