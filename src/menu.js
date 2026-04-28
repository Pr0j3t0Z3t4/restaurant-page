export default function loadMenu() {
    const content = document.getElementById('content');

    const headline = document.createElement('h2');
    headline.textContent = 'Il Paradiso della Pasta';

    const menuList = document.createElement('div');
    menuList.className = 'menu-grid';

    const dishes = [
        { name: 'Lasagna alla Bolognese', price: 'R$ 72', desc: 'Massa fresca, molho de tomate, carne moída e vinho.' },
        { name: 'Gnocchi', price: 'R$ 72', desc: 'Nhoque de massa fresca com molho à sua escolha.' },
        { name: 'Risotto Al Limone', price: 'R$ 79', desc: 'Risoto ao limão, creme de leite e queijo parmesão.' },
        { name: 'Tiramisú', price: 'R$ 26', desc: 'Creme de mascarpone com biscoito inglês embebido em café.' }
    ];

    dishes.forEach(dish => {
        const item = document.createElement('div');
        item.innerHTML = `<strong>${dish.name}</strong> - ${dish.price}<br><small>${dish.desc}</small><br><br>`;
        menuList.appendChild(item);
    });

    content.appendChild(headline);
    content.appendChild(menuList);
}