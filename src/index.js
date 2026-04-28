import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import './style.css';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpa tudo dentro da div
}

// Seleciona os botões na ordem (Home, Menu, About)
const buttons = document.querySelectorAll('nav button');

buttons[0].addEventListener('click', () => {
    clearContent();
    loadHome();
});

buttons[1].addEventListener('click', () => {
    clearContent();
    loadMenu();
});

buttons[2].addEventListener('click', () => {
    clearContent();
    loadContact();
});

// Carrega a Home por padrão ao abrir o site
loadHome();