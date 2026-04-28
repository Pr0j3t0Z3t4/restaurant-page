export default function loadHome() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Bem-vindo ao Restaurante Maravilhoso';

    const copy = document.createElement('p');
    copy.textContent = 'A melhor comida da cidade, feita com muito amor e carinho!';

    content.appendChild(headline);
    content.appendChild(copy);
}