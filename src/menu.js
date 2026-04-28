export default function loadMenu() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Nosso Menu';

    const list = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = 'Cachorro-quente Especial - R$ 15,00';
    const item2 = document.createElement('li');
    item2.textContent = 'Frango Assado Completo - R$ 45,00';

    list.appendChild(item1);
    list.appendChild(item2);

    content.appendChild(headline);
    content.appendChild(list);
}