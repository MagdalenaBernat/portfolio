"use strict";

function scrollToElement(elementId) {
  const navbar = document.querySelector('#nav-buttons');
  const navbarStyles = window.getComputedStyle(navbar);
  const marginTop = parseInt(navbarStyles.marginTop);
  const marginBottom = parseInt(navbarStyles.marginBottom);
  const navbarHeight = navbar.offsetHeight + marginTop + marginBottom;

  const element = document.getElementById(elementId);
  const elementPosition = element.offsetTop - navbarHeight + 5; // Adjusted for better visibility

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('#nav-buttons a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToElement(targetId);
  });
});