"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('#aboutme-buttons-container input[type="radio"]');
    const sections = document.querySelectorAll('section.container');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const toggleValue = radio.getAttribute('data-toggle-value');

            sections.forEach(section => {
                if (section.getAttribute('data-toggle-group') === toggleValue) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    document.querySelector('#aboutme-buttons-container input[type="radio"]:checked').dispatchEvent(new Event('change'));
});