
        // Professional Finance Website JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Navbar scroll effect - background change on scroll
            const navbar = document.querySelector('.navbar');

            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop > 50) {
                    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.boxShadow = '0 2px 20px rgba(26, 54, 93, 0.1)';
                } else {
                    navbar.style.backgroundColor = 'white';
                    navbar.style.backdropFilter = 'none';
                    navbar.style.boxShadow = '0 2px 10px rgba(26, 54, 93, 0.1)';
                }
            });

            // Animate elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .card, .value-prop-icon');
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Product card hover effects
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });

                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Button ripple effect
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = (e.offsetX - 10) + 'px';
                    ripple.style.top = (e.offsetY - 10) + 'px';
                    ripple.style.width = '20px';
                    ripple.style.height = '20px';

                    this.appendChild(ripple);

                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });

            // Form validation for eligibility check (placeholder)
            const eligibilityBtn = document.querySelector('button.btn-outline-light');
            if (eligibilityBtn) {
                eligibilityBtn.addEventListener('click', function() {
                    // Smooth animation before alert
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                        alert('Eligibility check form would open here.');
                    }, 150);
                });
            }

            // Apply now buttons (placeholder)
            const applyBtns = document.querySelectorAll('button.btn-primary');
            applyBtns.forEach(btn => {
                if (btn.textContent.includes('Apply') || btn.textContent.includes('Explore') || btn.textContent.includes('Check') || btn.textContent.includes('Get')) {
                    btn.addEventListener('click', function() {
                        // Smooth animation before alert
                        this.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            this.style.transform = 'scale(1)';
                            alert('Application form would open here.');
                        }, 150);
                    });
                }
            });

            // Carousel enhancement
            const carousel = document.querySelector('#heroCarousel');
            if (carousel) {
                carousel.addEventListener('slide.bs.carousel', function() {
                    const activeItem = carousel.querySelector('.carousel-item.active img');
                    activeItem.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        activeItem.style.transform = 'scale(1)';
                    }, 600);
                });
            }

            // Counter animation (enhanced)
            const counters = document.querySelectorAll('.counter');
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => counterObserver.observe(counter));

            function animateCounter(counter) {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const start = performance.now();
                const startValue = 0;

                function update(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);

                    // Easing function for smooth animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(startValue + (target - startValue) * easeOutQuart);

                    counter.innerText = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                }

                requestAnimationFrame(update);
            }

            // Add loading animation for page
            window.addEventListener('load', function() {
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 100);
            });
        });

        // Add ripple animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    
