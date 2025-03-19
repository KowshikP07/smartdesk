document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
// Get all image slides
const slides = document.querySelectorAll('.image-slide');
let currentSlide = 0;
const totalSlides = slides.length;
const intervalTime = 3000; // Time in milliseconds (3 seconds)

// Set initial positions
function updateSlides() {
    slides.forEach((slide, index) => {
        // Reset all slides
        slide.style.transition = 'all 0.5s ease-in-out';
        
        // Calculate position based on the current slide
        const position = (index - currentSlide + totalSlides) % totalSlides;
        
        if (position === 0) {
            // Front slide
            slide.style.top = '100px';
            slide.style.left = '150px'; // Rightmost position
            slide.style.zIndex = '3';
        } else if (position === 1) {
            // Middle slide
            slide.style.top = '50px';
            slide.style.left = '75px'; // Middle position
            slide.style.zIndex = '2';
        } else {
            // Back slide
            slide.style.top = '0px';
            slide.style.left = '0px'; // Leftmost position
            slide.style.zIndex = '1';
        }
    });
}

// Start the slideshow rotation
function startSlideshow() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    }, intervalTime);
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    updateSlides(); // Set initial positions
    startSlideshow(); // Start the rotation
});