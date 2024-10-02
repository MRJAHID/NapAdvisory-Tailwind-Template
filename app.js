/** Mobile Menu Toggle */
// var toggleButton = document.querySelector('.toggle-menu');
// var navBar = document.querySelector('.mobile__menu-left');
// var overlay = document.querySelector('.mobile__menu-overlay');
// var closemenu = document.querySelector('.close-menu');
//
// toggleButton.addEventListener('click', function () {
//     navBar.classList.toggle('left-open');
//     overlay.classList.toggle('active');
// });
//
// closemenu.addEventListener('click', function () {
//     navBar.classList.toggle('left-open');
//     overlay.classList.toggle('active');
// });
/** Mobile Menu Toggle */

// Faq Accordian START
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
// Faq Accordian END
