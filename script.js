/* ==================== Toggle Navbar ==================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/* ==================== Scroll Section Active Link ==================== */

let Section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/* ==================== Sticky Navbar ==================== */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);





/* ==================== Remove Navbar Toggle when Click Link ==================== */

menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

};


/* ==================== ScrollReveal ==================== */

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });





/* ==================== Multiple Text ==================== */

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'En - Id Translator', 'Digital Marketer'],
    typespeed: 1000,
    backspeed: 100,
    backDelay: 2000,
    loop: true
});