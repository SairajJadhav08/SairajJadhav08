document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile menu functionality
    try {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links a');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    if (navLinks.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
            
            // Close mobile menu when clicking on a nav item
            if (navItems.length > 0) {
                navItems.forEach(item => {
                    item.addEventListener('click', () => {
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            const icon = mobileMenuBtn.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-times');
                                icon.classList.add('fa-bars');
                            }
                        }
                    });
                });
            }
        }
    } catch (error) {
        console.log('Mobile menu functionality error:', error);
    }

    // Back to top button functionality
    try {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    } catch (error) {
        console.log('Back to top button error:', error);
    }

    // Progress bar functionality - modified to stay at 100% when reaching end of page
    try {
        const progressBar = document.getElementById('progress-bar');
        
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                
                // Ensure progress bar stays at 100% when reaching the end
                if (scrolled >= 99.9) {
                    progressBar.style.width = '100%';
                } else {
                    progressBar.style.width = scrolled + '%';
                }
            });
        }
    } catch (error) {
        console.log('Progress bar error:', error);
    }

    // Active navigation links based on scroll position
    try {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        
        if (sections.length > 0 && navItems.length > 0) {
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + current) {
                        item.classList.add('active');
                    }
                });
            });
        }
    } catch (error) {
        console.log('Active navigation links error:', error);
    }

    // Smooth scrolling for navigation links
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.log('Smooth scrolling error:', error);
    }

    // Animate skill bars on scroll
    try {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        if (skillBars.length > 0) {
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const barTop = bar.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (barTop < windowHeight - 100) {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }
                });
            }
            
            // Initial check if skill bars are in view
            animateSkillBars();
            
            // Check on scroll
            window.addEventListener('scroll', animateSkillBars);
        }
    } catch (error) {
        console.log('Skill bars animation error:', error);
    }

    // Form submission handling
    try {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Here you would typically send the form data to a server
                // For this demo, we'll just show a success message
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    const originalText = submitBtn.innerHTML;
                    
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    
                    // Simulate form submission
                    setTimeout(() => {
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                        submitBtn.style.backgroundColor = '#2ecc71';
                        
                        // Reset form
                        contactForm.reset();
                        
                        // Restore button after 3 seconds
                        setTimeout(() => {
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.backgroundColor = '';
                        }, 3000);
                    }, 1500);
                }
            });
        }
    } catch (error) {
        console.log('Form submission error:', error);
    }
});