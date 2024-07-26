// header

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

// home click scroll top 0
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('#navbar');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // for smooth scrolling
            });
        });
    });
});


// header end

let currentIndex = 0;

function showSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.card2').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initial display
showSlide(currentIndex);


