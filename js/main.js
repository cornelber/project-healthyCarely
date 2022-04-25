let menuBurger = document.querySelector('.menu-burger');
let menuNavbarMobile = document.querySelector('.header-nav-mobile');

menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    menuNavbarMobile.classList.toggle('active');
})