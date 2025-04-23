// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Sticky header
    const header = document.querySelector('header');
    
    function updateHeader() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    
    // Run on load
    updateHeader();
    
    // Run on scroll
    window.addEventListener('scroll', updateHeader);
    
    // Menu category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Show all items if 'all' category is selected, otherwise filter
            menuItems.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    function createLightbox(index) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const close = document.createElement('div');
        close.className = 'lightbox-close';
        close.innerHTML = '<i class="fas fa-times"></i>';
        
        const image = document.createElement('div');
        image.className = 'lightbox-image';
        image.style.backgroundImage = galleryItems[index].style.backgroundImage;
        
        const prev = document.createElement('div');
        prev.className = 'lightbox-prev';
        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const next = document.createElement('div');
        next.className = 'lightbox-next';
        next.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        // Append elements to lightbox
        lightbox.appendChild(close);
        lightbox.appendChild(image);
        lightbox.appendChild(prev);
        lightbox.appendChild(next);
        
        // Append lightbox to body
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Add event listeners
        close.addEventListener('click', function() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
        });
        
        prev.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            image.style.backgroundImage = galleryItems[currentIndex].style.backgroundImage;
        });
        
        next.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            image.style.backgroundImage = galleryItems[currentIndex].style.backgroundImage;
        });
    }
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            createLightbox(index);
        });
    });
    
    // Scroll to sections smoothly
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.menu-item, .gallery-item, .section-title');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animatedElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            if ((elementBottomPosition >= windowTopPosition) && 
                (elementTopPosition <= windowBottomPosition)) {
                element.classList.add('animated');
            }
        });
    }
    
    // Run once on page load
    checkIfInView();
    
    // Run on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation could be added here
            
            // Show success message (in a real app, you'd send the form data to a server)
            const formElements = this.elements;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            
            this.appendChild(successMessage);
            
            // Reset form
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit') {
                    formElements[i].value = '';
                }
            }
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                this.removeChild(successMessage);
            }, 3000);
        });
    }
}); 