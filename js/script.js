document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // 1. Efeito de Scroll no Header
    // =========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // =========================================
    // 2. Menu Mobile (Hambúrguer)
    // =========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fechar menu ao clicar em um link (para mobile)
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // =========================================
    // 3. Lógica do FAQ (Acordeão)
    // =========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // =========================================
    // 4. Menu Flutuante de Redes Sociais
    // =========================================
    const socialToggle = document.getElementById('social-toggle');
    const socialMenu = document.getElementById('social-menu');

    if (socialToggle && socialMenu) {
        socialToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            socialMenu.classList.toggle('active');
            socialToggle.classList.toggle('active');
            
            const icon = socialToggle.querySelector('i');
            if (socialMenu.classList.contains('active')) {
                icon.classList.remove('fa-share-alt');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-share-alt');
            }
        });

        document.addEventListener('click', (e) => {
            if (!socialMenu.contains(e.target) && !socialToggle.contains(e.target)) {
                socialMenu.classList.remove('active');
                socialToggle.classList.remove('active');
                const icon = socialToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-share-alt');
            }
        });
    }

});