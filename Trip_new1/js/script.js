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
        540: { slidesPerView: 1.3, spaceBetween: 16 },
        300: { slidesPerView: 1, spaceBetween: 16 }
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
        navigator.clipboard.writeText(text).then(showCopyNotification).catch(err => console.error(err));
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try { document.execCommand('copy'); showCopyNotification(); } catch (err) { console.error(err); }
        document.body.removeChild(textarea);
    }
}

function showCopyNotification() {
    const el = document.querySelector('.copy');
    if (!el) return;
    el.style.transform = 'scale(1)';
    setTimeout(() => { el.style.transform = 'scale(0)'; }, 2000);
}

// Аккордеон FAQ
document.querySelectorAll('.c-acc__trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
        const item = this.closest('.c-acc__item');
        const body = item.querySelector('.c-acc__body');
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        // Закрыть все остальные
        document.querySelectorAll('.c-acc__item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.c-acc__trigger').setAttribute('aria-expanded', 'false');
                otherItem.querySelector('.c-acc__body').classList.remove('is-open');
            }
        });

        // Переключить текущий
        if (isOpen) {
            this.setAttribute('aria-expanded', 'false');
            body.classList.remove('is-open');
        } else {
            this.setAttribute('aria-expanded', 'true');
            body.classList.add('is-open');
        }
    });
});
