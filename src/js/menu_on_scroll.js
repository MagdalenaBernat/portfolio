"use strict";

const navbarSelector = 'nav';
const navbar = document.querySelector(navbarSelector);

function menuOnScroll(selector) {
    const styles = `
    ${selector} {
        transition: height 0.8s ease-in-out;
    }

    ${selector}.small {
        height: 70px; 
    }
    .sidebar {
           margin-top: 25vh;
    }

    @media (min-width: 768px) and (max-width: 1199px){
        ${selector}.small {
            height: 100px;
        }
    }
    @media (min-width: 1200px) {
        ${selector}.small {
            height: 120px;
        }
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


