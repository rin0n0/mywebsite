document.getElementById('configurator-btn').addEventListener('click', function() {
    window.location.href = 'configurator.html';
});

let currentIndex = 0; 
const slides = document.querySelectorAll('.slide');  

function moveSlide(step) {
    currentIndex += step; 
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    }
    if (currentIndex >= slides.length) {
        currentIndex = 0; 
    }
    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider-images').style.transform = `translateX(${newTransformValue})`;
}


setInterval(() => {
    moveSlide(1); 
}, 9000);  

function toggleMenu() {
    const menu = document.getElementById('menu');
    const navMenu = document.getElementById('navMenu');
    menu.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
}

function showComponents() {
    const components = document.getElementById('components');

    if (components.classList.contains('hidden')) {
        components.classList.remove('hidden');
        setTimeout(() => {
            components.classList.add('visible');
        }, 10);  
    } else {
        components.classList.remove('visible');
        setTimeout(() => {
            components.classList.add('hidden');
        }, 500); 
    }
}

