document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');

        const bars = document.querySelectorAll('.bar');
        if (sidebar.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'rotate(0) translate(0, 0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });

    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(0) translate(0, 0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });

    // Initialize AOS animations
    AOS.init({
        once: true
    });

    // Hero Image Slider
    let currentImage = 0;
    const images = document.querySelectorAll('.hero-image');

    function changeImage() {
        images.forEach((img, index) => {
            img.style.transform = `translateX(${(index - currentImage) * 100}%)`;
            img.style.opacity = index === currentImage ? "1" : "0";
        });

        currentImage = (currentImage + 1) % images.length;
    }

    setInterval(changeImage, 5000);
    changeImage(); // Show the first image

    // Changing hero text dynamically
    const heroText = document.getElementById('hero-text');
    const heroTexts = [
        "High-Performance Hardware Solutions Tailored for Excellence",
        "Comprehensive Equipment Rental Services for Your Needs",
        "Dependable and Efficient Power Backup Solutions"
    ];
    let currentText = 0;

    function changeHeroText() {
        heroText.textContent = heroTexts[currentText];
        currentText = (currentText + 1) % heroTexts.length;
    }

    setInterval(changeHeroText, 4000);

    // Auto-hide header on scroll
    let lastScrollPosition = 0;
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > lastScrollPosition) {
            document.querySelector('.header').classList.add('hidden');
        } else {
            document.querySelector('.header').classList.remove('hidden');
        }
        lastScrollPosition = currentScrollPosition;
    });
});

// Gallery Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index < 0) currentSlide = slides.length - 1;
        if (index >= slides.length) currentSlide = 0;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Initialize with first slide
    showSlide(0);
});
