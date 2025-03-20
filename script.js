// Toggle sidebar menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    
    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        
        // Animate hamburger icon
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

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('active');
            
            // Reset hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(0) translate(0, 0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });

    // Close menu when clicking a link
    const links = document.querySelectorAll('#sidebar a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            
            // Reset hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(0) translate(0, 0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0, 0)';
        });
    });

    // Initialize AOS animations
    AOS.init({
        once: true,
        // Removed disable: 'mobile' to enable animations on mobile
    });

    // Hero image slider
    let currentImage = 0;
    const images = document.querySelectorAll('.hero-image');
    
    function changeImage() {
        images[currentImage].style.opacity = 0;
        
        currentImage = (currentImage + 1) % images.length;
        
        setTimeout(() => {
            images[currentImage].style.opacity = 1;
        }, 300);
    }
    
    // Change image every 5 seconds
    setInterval(changeImage, 5000);

    // Auto-hide header on scroll
    let lastScrollPosition = 0;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.scrollY;
        
        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            document.querySelector('.header').classList.add('hidden');
        } else {
            // Scrolling up
            document.querySelector('.header').classList.remove('hidden');
        }
        
        lastScrollPosition = currentScrollPosition;
    });
});
