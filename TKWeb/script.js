// Burger show/hide

$(function() {
    $('.header-btn').click(function() {
        $('.header-btn').toggleClass('active')
        $('.header-menu').toggleClass('active')
    })

    // body auto-scroll stop when burger btn is active
    if ($('.header-menu').hasClass('active')) {
        $('body').css('height', '100vh')
        $('body').css('overflow', 'hidden')
    } else {
        $('body').css('overflow', 'auto')
    }
})


// let burger = document.querySelector('.header-burger')
// let menu = document.querySelector('.header-menu')


// burger.addEventListener('click', open)
// menu.addEventListener('click', open)
// document.body.addEventListener('click', open)

// burger.onclick = function open() {
//     document.body.classList.toggle('lock')
//         // document.body.style.color = 'red'
//     burger.classList.toggle('active')
//     menu.classList.toggle('active')
// }
// open();


// SLIDER CAROUSEL
const carousel = new SliderCarousel({
    // responsive: [{
    //     breakpoint: 1024,
    //     itemsToShow: 3,
    // }, {
    //     breakpoint: 768,
    //     itemsToShow: 2,
    // }, {
    //     breakpoint: 576,
    //     itemsToShow: 1,
    // }]

})

carousel.init();