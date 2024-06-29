"use strict";

window.onload = function() {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
};
