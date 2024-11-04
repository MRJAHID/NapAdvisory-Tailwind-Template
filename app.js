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

/** Review Slider START */

const carouselContainer = document.querySelector('.nap_reviews-cards');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0; // Starting position of the carousel
const itemsPerSlide = 3; // Number of cards visible in each slide
const totalItems = document.querySelectorAll('.nap_reviews-card').length;
const totalSlides = Math.ceil(totalItems / itemsPerSlide); // Calculate total slides

// Get width of one slide (container width divided by items per slide)
const slideWidth = carouselContainer.offsetWidth / itemsPerSlide;

// Function to update carousel position
function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth * itemsPerSlide}px)`;
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
    currentIndex = 0; // Reset index to avoid misalignment
    updateCarousel();
});


/** Review Slider End */


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


// Carousel
