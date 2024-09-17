/** Mobile Menu Toggle */
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.mobile__menu-left');
var overlay = document.querySelector('.mobile__menu-overlay');
var closemenu = document.querySelector('.close-menu');

toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('left-open');
    overlay.classList.toggle('active');
});

closemenu.addEventListener('click', function () {
    navBar.classList.toggle('left-open');
    overlay.classList.toggle('active');
});
/** Mobile Menu Toggle */
