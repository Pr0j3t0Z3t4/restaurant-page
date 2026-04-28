export default function loadContact() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = 'Contato';

    const info = document.createElement('p');
    info.textContent = 'Endereço: Vila Isabel, Rio de Janeiro - RJ';
    
    const phone = document.createElement('p');
    phone.textContent = 'Telefone: (21) 99999-9999';

    content.appendChild(headline);
    content.appendChild(info);
    content.appendChild(phone);
}