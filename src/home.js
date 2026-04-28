export default function loadHome() {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Zizi Trattoria';

    const slogan = document.createElement('h3');
    slogan.textContent = 'Simples, intimista e inesquecível';

    const info = document.createElement('p');
    info.textContent = 'Culinária Italiana autêntica no Rio de Janeiro. Trabalhamos apenas com produtos frescos preparados na hora.';

    content.appendChild(headline);
    content.appendChild(slogan);
    content.appendChild(info);
}