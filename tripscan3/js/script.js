// Настройки слайдера
const slider = new Swiper(".slider", {
    speed: 500,
    autoHeight: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".slider__right",
        prevEl: ".slider__left",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1.3,
            spaceBetween: 16,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 16,
        }
    }
});

// Копирование ссылок кликом
document.querySelectorAll('.links__right')[0].addEventListener('click', event => {
    copyToClipboard(`${document.querySelectorAll('.links__link p')[0].textContent} | ${document.querySelectorAll('.links__link p')[1].textContent}`);
})

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied!');
            document.querySelector('.copy').style.transform = 'scale(1)';
            setTimeout( () => {
                document.querySelector('.copy').style.transform = 'scale(0)';
            }, 2000 )
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('Text copied!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
        document.body.removeChild(textarea);
    }
}