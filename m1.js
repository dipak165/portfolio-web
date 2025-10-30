document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
            
            // Smooth Scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form Submission
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const formData = {
                        name: this.querySelector('#name').value,
                        email: this.querySelector('#email').value,
                        subject: this.querySelector('#subject').value,
                        message: this.querySelector('#message').value
                    };
                    
                    // Here you would typically send the data to a server
                    console.log('Form submitted:', formData);
                    
                    // Show success message
                    const submitButton = this.querySelector('.submit-btn');
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitButton.style.backgroundColor = '#2ecc71';
                    
                    // Reset form after delay
                    setTimeout(() => {
                        this.reset();
                        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                        submitButton.style.backgroundColor = '';
                    }, 3000);
                });
            }
            
            // CV Download Button
            const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Actual download
        setTimeout(() => {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = 'Pallavi Patil resume.pdf';
            link.download = 'Pallavi Patil Resume.pdf'; // This specifies the filename for the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 300);
    });
}
            
            // Highlight active navigation item on scroll
            const sections = document.querySelectorAll('.section');
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 150) {
                        current = '#' + section.getAttribute('id');
                    }
                });
                
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === current) {
                        link.classList.add('active');
                    }
                });
            });
            
            // Animate subject cards on hover
            const subjectCards = document.querySelectorAll('.subject-card');
            subjectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            });
            
            // Simple animation for section titles
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach(title => {
                title.style.opacity = '0';
                title.style.transform = 'translateY(20px)';
                title.style.transition = 'all 0.5s ease';
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(title);
            });
        });
        