document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle) {
            navMenu.classList.remove('active')
        }
    });
});

//animaciones
window.sr = ScrollReveal();

ScrollReveal().reveal();

//header
sr.reveal('.header__title',{
    duration : 2000,
    origin : 'top',
    distance : '-100px',
});

sr.reveal('.header__paragraph',{
    duration : 2000,
    origin : 'top',
    distance : '-100px',
    delay: 300,
});

sr.reveal('.header__action',{
    duration :2000,
    origin : 'top',
    distance : '-100px',
    delay: 600,
});


//nosotros

sr.reveal('.nosotros__img',{
    duration : 2000,
    
});

//servicios
sr.reveal('.servicios__img',{
    duration : 2000,
});

sr.reveal('.servicios__content',{
    duration : 2000,
    delay:500,
});

//preguntas

sr.reveal('.preguntas__img',{
    duration : 2000,
});

sr.reveal('.preguntas__textos',{
    duration : 2000,
    delay:500,
});













