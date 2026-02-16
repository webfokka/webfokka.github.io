// Слайдер отзывов
const reviewSwiper = new Swiper('.swiper', {
    loop: false,
    spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 1,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1
    //     },
    //     768: {
    //         slidesPerView: 2
    //     },
    //     1200: {
    //         slidesPerView: 3
    //     }
    // },

    pagination: {
        el: '.project__dotes',
        clickable: true
    },

    navigation: {
        nextEl: '.project__next',
        prevEl: '.project__prev'
    }
});