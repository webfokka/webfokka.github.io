// Слайдер отзывов
const reviewSwiper = new Swiper('.review__block', {
    loop: false,
    spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.review__next',
        prevEl: '.review__prev'
    }
});

// Запрет зума на телефоне
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

// Наполнение темами обращения
function getEventsForItems() {
    document.querySelectorAll('.service__name').forEach( (item, i) => {
        let newHeaders = document.createElement('div');
        newHeaders.classList.add('contact__item');
        newHeaders.textContent = item.textContent;
        document.querySelector('.contact__list').append(newHeaders);
    })

    let typingInterval;

    document.querySelectorAll('.contact__item').forEach(item => {
        item.addEventListener('click', () => {
            const input = document.querySelectorAll('.contact__input')[1];
            const text = item.textContent.trim();

            clearInterval(typingInterval);
            input.value = '';
            input.focus();

            let index = 0;

            typingInterval = setInterval(() => {
                if (index >= text.length) {
                    clearInterval(typingInterval);
                    return;
                }
                input.value += text[index++];
            }, 75);
        });
    });
}
getEventsForItems()

// Скролл по странице
document.querySelectorAll('.header__button')[0].onclick=()=>document.querySelectorAll('body')[0].scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.header__button')[1].onclick=()=>document.querySelectorAll('section')[1].scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.header__button')[2].onclick=()=>document.querySelectorAll('section')[2].scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.header__button')[3].onclick=()=>document.querySelectorAll('section')[3].scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.header__button')[4].onclick=()=>document.querySelectorAll('section')[4].scrollIntoView({behavior:'smooth'});
document.querySelectorAll('.header__order')[0].onclick=()=>document.querySelectorAll('section')[4].scrollIntoView({behavior:'smooth'});

// Прячем и открываем шапку по скроллу
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.style.top = "-150px";
		// document.querySelector('.header__list').style.maxHeight = "0px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Отображение активной кнопки взависимости от места нахождения юзера на странице
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.header__button');
  const sections = document.querySelectorAll('section');

  const setActiveButton = (id) => {
    buttons.forEach(btn => {
      btn.classList.toggle(
        'header__button-active',
        btn.dataset.target === id
      );
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveButton(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));
});

// Отображение списка тем для заявки
document.querySelectorAll('.contact__input')[1].addEventListener('focus', event => {
    document.querySelector('.contact__list').classList.add('contact__list-active');
})

document.querySelectorAll('.contact__input')[1].addEventListener('blur', event => {
    document.querySelector('.contact__list').classList.remove('contact__list-active');
})

// Выбор темы и скролл до заявки из карточки услуги
document.querySelectorAll('.service__button-order').forEach((item, i) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('section')[4].scrollIntoView({ behavior: 'smooth' });

    const input = document.querySelectorAll('.contact__input')[1];
    const text = document.querySelectorAll('.service__name')[i].textContent;

    setTimeout( ()=>{
        input.value = '';
        input.focus();

        let index = 0;

        const typing = setInterval(() => {
        if (index >= text.length) {
            clearInterval(typing);
            return;
        }
        input.value += text[index];
        index++;
        }, 100); // скорость печати (мс)
    }, 600 )
  });
});

// Обработка юзернейма
const input = document.querySelector('.contact__input');
input.addEventListener('input', () => {
  input.value = input.value.replace(/[^a-zA-Z0-9_]/g, '');
});

// Подключение отправки заявки
let infoFromBase;
let TOKEN;
let URI_API = "";
let CHAT_ID = "";
const request = new XMLHttpRequest();
request.open("GET", "js/base.json");
request.setRequestHeader("Content-type", "application/json; charset=utf-8");
request.send();
request.addEventListener("readystatechange", (event) => {
    if (request.readyState === 4 && request.status === 200) {
        infoFromBase = JSON.parse(request.response);
        TOKEN = infoFromBase.token;
        CHAT_ID = infoFromBase.chatId;
        URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    }
});

// Отправка заявки
document.querySelector('.contact__button').addEventListener('click', event => {
    if ( document.querySelectorAll('.contact__input')[0].value.length < 3 ) {
        document.querySelector('.contact__warning').textContent = '🔴 [ Укажите Ваш @username ] 🔴';
        document.querySelector('.contact__warning').style.color = '#F15946';
        document.querySelector('.contact__warning').style.maxHeight = '60px';
        document.querySelector('.contact__warning').style.opacity = '1';
        document.querySelector('.contact__warning').style.marginBottom = '20px';
        document.querySelectorAll('.contact__input')[0].classList.add('contact__input-active');
        setTimeout( ()=>{
            document.querySelector('.contact__warning').style.maxHeight = '0px';
            document.querySelector('.contact__warning').style.opacity = '0';
            document.querySelector('.contact__warning').style.marginBottom = '0px';
            document.querySelectorAll('.contact__input')[0].classList.remove('contact__input-active');
        }, 3000 )
    } else if ( document.querySelectorAll('.contact__input')[1].value.length < 3 ) {
        document.querySelector('.contact__warning').textContent = '🔴 [ Укажите тему обращения ] 🔴';
        document.querySelector('.contact__warning').style.color = '#F15946';
        document.querySelector('.contact__warning').style.maxHeight = '60px';
        document.querySelector('.contact__warning').style.opacity = '1';
        document.querySelector('.contact__warning').style.marginBottom = '20px';
        document.querySelectorAll('.contact__input')[1].classList.add('contact__input-active');
        setTimeout( ()=>{
            document.querySelector('.contact__warning').style.maxHeight = '0px';
            document.querySelector('.contact__warning').style.opacity = '0';
            document.querySelector('.contact__warning').style.marginBottom = '0px';
            document.querySelectorAll('.contact__input')[1].classList.remove('contact__input-active');
        }, 3000 )
    } else {
        let messageTg = `📋 <b>НОВАЯ ЗАЯВКА С САЙТА</b> 📋\n\n`;
        messageTg += `<blockquote><b>👨‍🦲 Юзернейм - </b>@${document.querySelectorAll('.contact__input')[0].value}\n`;
        messageTg += `<b>📄 Тема обращения - </b>${document.querySelectorAll('.contact__input')[1].value}\n`;
        if ( document.querySelectorAll('.contact__input')[2].value != "" ) {
            messageTg += `<b>✏️ Комментарий - </b>${document.querySelectorAll('.contact__input')[2].value}</blockquote>`;
        } else {
            messageTg += `<b>✏️ Комментарий - </b>отсутствует</blockquote>`;
        }

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });

        document.querySelector('.contact__warning').textContent = '🟢 [ Заявка отправлена, ожидайте обратную связь ] 🟢';
        document.querySelector('.contact__warning').style.color = '#4cff20';
        document.querySelector('.contact__warning').style.maxHeight = '60px';
        document.querySelector('.contact__warning').style.opacity = '1';
        document.querySelector('.contact__warning').style.marginBottom = '20px';
        document.querySelectorAll('.contact__input')[0].value = "";
        document.querySelectorAll('.contact__input')[1].value = "";
        document.querySelectorAll('.contact__input')[2].value = "";
        setTimeout( ()=>{
            document.querySelector('.contact__warning').style.maxHeight = '0px';
            document.querySelector('.contact__warning').style.opacity = '0';
            document.querySelector('.contact__warning').style.marginBottom = '0px';
        }, 3000 )
    }
})

// Убираем окно загрузки
window.addEventListener('load', () => {
    setTimeout( ()=>{
        document.querySelector('.loading__text').style.animation = "none";
        setTimeout( ()=>{
            document.querySelector('.loading__text').style.transform = "scale(0)";
            setTimeout( ()=>{
                document.querySelector('.loading').style.top = "-120vh";
            }, 400 )
        }, 100 )
    }, 1500 )
});