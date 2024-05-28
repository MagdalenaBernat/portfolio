"use strict";

const navbarSelector = 'nav';
const navbar = document.querySelector(navbarSelector);

function menuOnScroll(selector) {
    const styles = `
    ${selector} {
        transition: height 0.5s ease-in-out
    }

    ${selector}.small {
        height: 150px
    }
    `

    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
}

menuOnScroll(navbarSelector);

window.addEventListener('scroll', () => {
    window.scrollY > 10
        ? navbar.classList.add('small')
        : navbar.classList.remove('small')
});