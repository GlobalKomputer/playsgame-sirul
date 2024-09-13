document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
