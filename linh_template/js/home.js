
function toggleMenu() {
    var socialMenu = document.getElementById('socialMenu');

    if (socialMenu.style.display === 'block') {
        socialMenu.style.display = 'none';
    } else {
        socialMenu.style.display = 'block';
    }
}

let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        const translateValue = -currentSlide * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');

        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    }

