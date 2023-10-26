var swiper = new Swiper(".mySwiper", {
    speed: 3000,
    parallax: true,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#ffd700',
        sizeVariations: 1,
        maxParticles: 1000,
        speed: 0.25,
    });;

};


var body = document.querySelector('body');
body.addEventListener('mouseover', function() {
  body.style.overflowY = 'auto'; /* Show scroll on hover */
});

body.addEventListener('mouseout', function() {
  body.style.overflowY = 'scroll'; /* Hide scroll when not hovered */
});
