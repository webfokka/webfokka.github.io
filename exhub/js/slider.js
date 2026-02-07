function initSlider() {
    if (typeof Swiper === "undefined") {
        console.warn("Swiper не найден. Перезагрузка через 30 секунд...");
        setTimeout(() => location.reload(), 5000);
        return;
    }

    try {
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 1,
            navigation: {
                nextEl: '.rev__nav-right',
                prevEl: '.rev__nav-left',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                }
            }
        });
    } catch (err) {
        console.error("Ошибка при инициализации Swiper:", err);
        setTimeout(() => location.reload(), 5000);
    }
}
initSlider();