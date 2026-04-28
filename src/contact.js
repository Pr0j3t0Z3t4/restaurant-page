export default function loadContact() {
    const content = document.getElementById('content');

    const headline = document.createElement('h2');
    headline.textContent = 'Onde nos encontrar';

    const address = document.createElement('p');
    address.innerHTML = '📍 R. Iagolândia, 80 - Taquara, Rio de Janeiro<br>Comandada por @ochefvittorio';

    const hours = document.createElement('div');
    hours.innerHTML = `
        <h3>Horários</h3>
        <p>Terça à Quinta: 18h às 23h</p>
        <p>Sexta e Sábado: 11h às 23h (Pausa 16h-18h)</p>
        <p>Domingo: 11h às 16h</p>
    `;

    content.appendChild(headline);
    content.appendChild(address);
    content.appendChild(hours);
}