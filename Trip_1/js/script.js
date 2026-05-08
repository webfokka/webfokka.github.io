// Инициализация слайдера
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

// Копирование ссылок
const copyBtn = document.querySelector('.links__right');
if (copyBtn) {
    copyBtn.addEventListener('click', function () {
        const links = document.querySelectorAll('.links__link p');
        const text = Array.from(links).map(el => el.textContent.trim()).join(' | ');
        copyToClipboard(text);
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyNotification();
        }).catch(err => {
            console.error('Ошибка копирования:', err);
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
            showCopyNotification();
        } catch (err) {
            console.error('Ошибка копирования:', err);
        }
        document.body.removeChild(textarea);
    }
}

function showCopyNotification() {
    const notification = document.querySelector('.copy');
    if (!notification) return;
    notification.style.transform = 'scale(1)';
    setTimeout(() => {
        notification.style.transform = 'scale(0)';
    }, 2000);
}
