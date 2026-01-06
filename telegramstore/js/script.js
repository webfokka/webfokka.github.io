// const { event } = require("jquery");

let activeMore = false;
document.querySelector('.add').addEventListener('click', event => {
    if ( !activeMore ) {
        document.querySelector('.info').style.maxHeight = "5000px";
        document.querySelector('.add').textContent = "Скрыть информацию";
        activeMore = true;
    } else {
        document.querySelector('.info').style.maxHeight = "0px";
        document.querySelector('.add').textContent = "Детальная информация";
        activeMore = false;
    }
})

// Выбор товара

let maxProduct = 0;
let summPrice = 0;

let priceProduct = 0;
let haveProduct = 0;
let sellProduct = 0;
let nameProduct = 0;
let infoProduct = 0;
let yearProduct = 0;
let geoProduct = '';
let lvlProduct = '';

let numberProduct = 1;

let productId = 0;

let totalSumm = 0;

document.querySelectorAll('.catalog__buy').forEach( (item, i) => {
    item.addEventListener('click', event => {
        if ( item.classList.length == 1 && parseInt(document.querySelectorAll('.catalog__have span')[i].textContent) > 0  ) {

            priceProduct = Number(document.querySelectorAll('.catalog__price span')[i].textContent.replace(/\s|\$/g, ""));
            haveProduct = parseInt(document.querySelectorAll('.catalog__have span')[i].textContent);
            sellProduct = parseInt(document.querySelectorAll('.catalog__sell span')[i].textContent);
            nameProduct = document.querySelectorAll('.catalog__info p')[i].textContent;
            infoProduct = document.querySelectorAll('.catalog__info span')[i].textContent;
            yearProduct = document.querySelectorAll('.catalog__year')[i].textContent;
            geoProduct = document.querySelectorAll('.catalog__geo')[i].textContent;
            lvlProduct = document.querySelectorAll('.catalog__lvl')[i].textContent;

            maxProduct = haveProduct;
            summPrice = priceProduct;

            productId = i;

            document.querySelector('.buy__info p').textContent = nameProduct;
            document.querySelector('.buy__info span').textContent = infoProduct;
            document.querySelector('.buy__price span').textContent = `${priceProduct} $`;
            document.querySelector('.buy__have span').textContent = `${haveProduct} шт.`;
            document.querySelector('.buy__sell span').textContent = `${sellProduct} шт.`;
            document.querySelector('.buy__summ span').textContent = priceProduct;
            document.querySelector('.buy__year').textContent = yearProduct;
            document.querySelector('.buy__geo').textContent = geoProduct;
            document.querySelector('.buy__lvl').textContent = lvlProduct;

            numberProduct = 1;
            document.querySelector('.buy__summ strong').textContent = "";
            document.querySelector('.buy__number').textContent = 1;
            document.querySelector('.buy__summ span').textContent = priceProduct;

            if ( nameProduct.includes('канал') ) {
                document.querySelector('.buy__descr-channel').style.display = "flex";
                document.querySelector('.buy__descr-account').style.display = "none";
                document.querySelector('.buy__title').textContent = 'Покупка канала';
            } else {
                document.querySelector('.buy__descr-channel').style.display = "none";
                document.querySelector('.buy__descr-account').style.display = "flex";
                document.querySelector('.buy__title').textContent = 'Покупка аккаунта';
            }

            document.querySelector('.buy').style.display = "block";
            setTimeout( () => {
                document.querySelector('.buy').style.opacity = 1;
                setTimeout( () => {
                    document.querySelector('.buy__body').style.top = "50%";
                }, 100)
            }, 100)

        }
    })
})

document.querySelector('.buy__pay').addEventListener('click', event => {
    document.querySelector('.bag__empty').style.display = "none";
    document.querySelector('.bag__summ').style.display = "block";
    document.querySelector('.bag__button').style.display = "flex";

    let oldOrNot = false;
    let itsId;

    document.querySelectorAll('.bag__item').forEach( (item, i) => {
        if ( item.id == productId ) {
            oldOrNot = true;
            itsId = i;
        } 
    })

    if (oldOrNot == true) {
        const oldSumm = Number(document.querySelectorAll('.bag__price span')[itsId].textContent);

        totalSumm -= oldSumm;

        document.querySelectorAll('.bag__number span')[itsId].textContent = numberProduct;
        document.querySelectorAll('.bag__price span')[itsId].textContent = summPrice.toFixed(2);

        totalSumm += summPrice;

        document.querySelector('.bag__summ span').textContent = totalSumm.toFixed(2);
    } else {

        let newCard = document.createElement('div');
        newCard.classList.add('bag__item');
        newCard.id = productId;
        newCard.innerHTML = `
            <div class="bag__table">
                <div class="bag__image">
                    <img src="images/telegram_logo_icon_225651.png" alt="telegram icon">
                </div>
                <div class="bag__info">
                    <div class="bag__name">${nameProduct}</div>
                    <div class="bag__descr">${infoProduct}</div>
                    <div class="bag__list">
                        <div class="bag__option bag__year">${yearProduct}</div>
                        <div class="bag__option bag__geo">${geoProduct}</div>
                        <div class="bag__option bag__lvl">${lvlProduct}</div>
                    </div>
                </div>
            </div>
            <div class="bag__number">Количество - <span>${numberProduct}</span> шт.</div>
            <div class="bag__price">Сумма - <span>${summPrice.toFixed(2)}</span> $</div>
            <div class="bag__delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg></div>
        `;
        document.querySelector('.bag__block').append(newCard);

        totalSumm = totalSumm + summPrice;
        document.querySelector('.bag__summ span').textContent = totalSumm.toFixed(2);

    }

    document.querySelector('.buy__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.buy').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.buy').style.display = "none";
        }, 600)
    }, 600)

    document.querySelector(".success").style.bottom = "40px";
    setTimeout( () => {
        document.querySelector(".success").style.bottom = "-120px";
    }, 2000)
    
})

// Удаления товара из корзины

document.querySelector('.bag__block').addEventListener('click', event => {
    if (event.target.closest('.bag__delete')) {
        const item = event.target.closest('.bag__item');
        const itemPrice = Number(item.querySelector('.bag__price span').textContent);

        item.style.opacity = "0";
        item.style.maxHeight = "0px";
        item.style.paddingTop = "0px";
        item.style.paddingBottom = "0px";
        setTimeout( () => {
            item.remove();
            totalSumm -= itemPrice;
            document.querySelector('.bag__summ span').textContent = totalSumm.toFixed(2);

            if (document.querySelectorAll('.bag__item').length === 0) {
                document.querySelector('.bag__empty').style.display = "flex";
                document.querySelector('.bag__summ').style.display = "none";
                document.querySelector('.bag__button').style.display = "none";
                totalSumm = 0;
            }
        }, 600)

        console.log('delete gift')
        if ( item.querySelector('.bag__giftID') ) {
            const giftID = item.querySelector('.bag__giftID').textContent;
            console.log(giftID);
            document.querySelectorAll('.catalog__buy-gift')[giftID].classList.remove('catalog__buy-gift-active');
        }
        
    }
});

document.querySelector('.buy__close').addEventListener('click', event => {
    document.querySelector('.buy__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.buy').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.buy').style.display = "none";
        }, 600)
    }, 300)
})

document.querySelector('.pay__close').addEventListener('click', event => {
    document.querySelector('.pay').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.buy').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.buy').style.display = "none";

            document.querySelector('.pay__block').style.display = "none";
            document.querySelector('.pay__button').style.display = "none";
            document.querySelector('.pay__input').style.display = "none";
            document.querySelector('.pay__input').value = "";
            document.querySelectorAll('.pay__list')[0].style.display = "none";
            document.querySelectorAll('.pay__list')[1].style.display = "none";

            document.querySelectorAll('.pay__variable')[0].classList.remove('pay__variable-active');
            document.querySelectorAll('.pay__variable')[1].classList.remove('pay__variable-active');

            document.querySelectorAll('.pay__valute').forEach( item => {
                item.classList.remove('pay__valute-active');
            })

            document.querySelector('.pay__valute-ton').style.display = "flex";
        }, 600)
    }, 600)
})

// Выбор количества

document.querySelector('.buy__minus').addEventListener('click', event => {
    if ( numberProduct == 1 ) {

    } else {
        numberProduct = numberProduct - 1;
        document.querySelector('.buy__number').textContent = numberProduct;

        summPrice = priceProduct * numberProduct;

        if ( numberProduct >= 2 && numberProduct < 5 ) {
            summPrice = summPrice * 0.85;
            document.querySelector('.buy__summ strong').textContent = "( -15% )";
        } else if ( numberProduct >= 5 ) {
            summPrice = summPrice * 0.75;
            document.querySelector('.buy__summ strong').textContent = "( -25% )";
        } else {
            document.querySelector('.buy__summ strong').textContent = "";
        }
        document.querySelector('.buy__summ span').textContent = summPrice.toFixed(2);

    }
})

document.querySelector('.buy__plus').addEventListener('click', event => {
    if ( numberProduct < maxProduct ) {
        numberProduct = numberProduct + 1;
        document.querySelector('.buy__number').textContent = numberProduct;

        summPrice = priceProduct * numberProduct;

        if ( numberProduct >= 2 && numberProduct < 5 ) {
            summPrice = summPrice * 0.85;
            document.querySelector('.buy__summ strong').textContent = "( -15% )";
        } else if ( numberProduct >= 5 ) {
            summPrice = summPrice * 0.75;
            document.querySelector('.buy__summ strong').textContent = "( -25% )";
        } else {
            document.querySelector('.buy__summ strong').textContent = "";
        }
        document.querySelector('.buy__summ span').textContent = summPrice.toFixed(2);
    }
})

// Выбор валюты
document.querySelectorAll('.pay__variable')[0].style.filter = "blur(1px)";
document.querySelectorAll('.pay__variable').forEach(item => {
    item.addEventListener('click', event => {
        // document.querySelectorAll('.pay__variable')[0].classList.remove('pay__variable-active');
        // document.querySelectorAll('.pay__variable')[1].classList.remove('pay__variable-active');

        // item.classList.add('pay__variable-active');

        document.querySelector('.pay__block').style.display = "block";

        if ( item.textContent == "Фиатной валютой" ) {
            // document.querySelector('.pay__list-crypto').style.display = "none";
            // document.querySelector('.pay__list-fiat').style.display = "flex";
        } else {
            document.querySelector('.pay__list-crypto').style.display = "flex";
            document.querySelector('.pay__list-fiat').style.display = "none";
            item.classList.add('pay__variable-active');
        }
    })
})

let activeValute = '';
document.querySelectorAll('.pay__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.pay__valute').forEach( (item, i) => {
            item.classList.remove('pay__valute-active');
        })
        
        item.classList.add('pay__valute-active');
        activeValute = document.querySelectorAll('.pay__valute p')[i].textContent;

        document.querySelector('.pay__input').style.display = "block";
        document.querySelector('.pay__button').style.display = "flex";

    })
})

// Переход к выбору валюты



let wallet_usdt_trc = "TXVinw83AoSJgvUiYjkbzY163ydwneJcLB";
let wallet_usdt_erc = "0xF07939005903A514e8D381e6872d924D23E771eE";
let wallet_usdt_bsc = "0x081a1dbEa05284c3de3626a96d47e3d5953A48E9";
let wallet_usdt_ton = "UQBy4h9U9t8cGEVyuTeUnHHZAz1ir6Oc-labY0YPW0bf56Gx";
let wallet_usdt_sol = "DrJ2MevXQH42nnRyazrt6YrJVJYJemaHkG53mXPdBAKs";
let wallet_sol = "DrJ2MevXQH42nnRyazrt6YrJVJYJemaHkG53mXPdBAKs";
let wallet_eth = "0xF07939005903A514e8D381e6872d924D23E771eE";
let wallet_btc = "bc1qlkmz40q3u9kfmm85ee4q2fgnaphjyvsrsy4cxx";
let wallet_ton = "UQBy4h9U9t8cGEVyuTeUnHHZAz1ir6Oc-labY0YPW0bf56Gx";
let wallet_trx = "TKvGVcz9z7NSjBYTmwNhb5DMWnV6Rowsuj";

let bank_card_gas = "2200010103390673";
let bank_card_alpha = "2200153644835242";
let bank_card_wtb = "2200247954874591";

let sbp_number_gas = "+79169811909";
let sbp_number_alpha = "+79170246228";
let sbp_number_wtb = "+79660781173";

let bankCards = [bank_card_gas, bank_card_alpha, bank_card_wtb];
let sbpNumbers = [sbp_number_gas, sbp_number_alpha, sbp_number_wtb];

// Переход к странице оплаты

let valuteUSD = 0;

let valuteBTC = 0;
let valuteETH = 0;
let valuteSOL = 0;
let valuteTON = 0;
let valuteTRX = 0;

fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
    if (result.status === 200 && result.ok) {
        return result.json()
    }
}).then((JSON_DATA) => {

    async function getCurrencies(){  
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const response = await fetch(url);
        const data = await response.json();

        valuteBTC = JSON_DATA.BTC_USDT.buy_price;
        valuteETH = JSON_DATA.ETH_USDT.buy_price;
        valuteSOL = JSON_DATA.SOL_USDT.buy_price;
        valuteTON = JSON_DATA.TON_USDT.buy_price;
        valuteTRX = JSON_DATA.TRX_USDT.buy_price;

        valuteUSD = data.Valute.USD.Value;

        // document.querySelectorAll('.catalog__price-gift span').forEach((item, i) => {
        //     item.textContent = `${(Number(document.querySelectorAll('.catalog__ton span')[i].textContent.replace(/\s|\$/g, "")) * valuteTON).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}$`;
        // });

        document.querySelector('.ton__card-usd span').textContent = Number(valuteTON * 1.015).toFixed(2);
        document.querySelector('.ton__card-rub span').textContent = ((valuteTON * 1.015) * valuteUSD).toFixed(2);
    
    }

    getCurrencies();

}).catch((error) => {
    console.error('Ошибка получения списка: ', error);
})

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

const input = document.querySelector('.pay__input');

let tgUsernameClient = '';
input.addEventListener('input', () => {
    let value = input.value;

    // Убираем все символы @
    value = value.replace(/@/g, '');

    // Убираем все символы, кроме букв, цифр и _
    value = value.replace(/[^a-zA-Z0-9_]/g, '');

    // Добавляем один @ в начало
    input.value = '@' + value;
});

document.querySelector('.pay__button').addEventListener('click', event => {
    
    if ( document.querySelector('.pay__input').value.length < 4 || document.querySelector('.pay__input').value.includes('@') == false ) {

        document.querySelector('.pay__input').style.border = "2px solid red";
        setTimeout( () => {
            document.querySelector('.pay__input').style.border = "0px solid red";
        }, 2000)

    } else {
        document.querySelector('.pay__wrap').style.display = "flex";
        tgUsernameClient = document.querySelector('.pay__input').value;

        if ( activeValute == "СБП" ) {
            document.querySelector('.order__qr').style.display = "none";
            document.querySelector('.order__number span').textContent = `${(totalSumm * valuteUSD).toFixed(0)} RUB`;

            const randomItem = sbpNumbers[Math.floor(Math.random() * sbpNumbers.length)];

            let bank = '';

            if ( randomItem == sbp_number_gas ) {
                bank = '(Газпром Банк)'
            } else if ( randomItem == sbp_number_alpha ) {
                bank = '(Альфа Банк)'
            } else if ( randomItem == sbp_number_wtb ) {
                bank = '(ВТБ)'
            }

            document.querySelector('.order__wallet p').textContent = "Номер СБП";
            document.querySelector('.order__wallet span').textContent = `${randomItem} ${bank}`;
        } else if ( activeValute == "Карта" ) {
            document.querySelector('.order__qr').style.display = "none";
            document.querySelector('.order__number span').textContent = `${(totalSumm * valuteUSD).toFixed(0)} RUB`;

            const randomItem = bankCards[Math.floor(Math.random() * bankCards.length)];

            let bank = '';

            if ( randomItem == bank_card_gas ) {
                bank = '(Газпром Банк)'
            } else if ( randomItem == bank_card_alpha ) {
                bank = '(Альфа Банк)'
            } else if ( randomItem == bank_card_wtb ) {
                bank = '(ВТБ)'
            }

            document.querySelector('.order__wallet p').textContent = "Карта";
            document.querySelector('.order__wallet span').textContent = `${randomItem} ${bank}`;;
        } else {

            if ( activeValute == "USDT TRC-20 (TRX)" ) {
                document.querySelector('.order__qr img').src = "../images/qr_usdt_trc20.jpg";
                document.querySelector('.order__number span').textContent = `${totalSumm.toFixed(2)} USDT TRC-20`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_usdt_trc;
            } else if ( activeValute == "USDT BEP-20 (BSC)" ) {
                document.querySelector('.order__qr img').src = "../images/qr_usdt_bep20.jpg";
                document.querySelector('.order__number span').textContent = `${totalSumm.toFixed(2)} USDT BEP-20`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_usdt_bsc;
            } else if ( activeValute == "USDT ERC-20 (ETH)" ) {
                document.querySelector('.order__qr img').src = "../images/qr_usdt_eth.jpg";
                document.querySelector('.order__number span').textContent = `${totalSumm.toFixed(2)} USDT ERC-20`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_usdt_erc;
            } else if ( activeValute == "USDT SOL" ) {
                document.querySelector('.order__qr img').src = "../images/qr_usdt_sol.jpg";
                document.querySelector('.order__number span').textContent = `${totalSumm.toFixed(2)} USDT SOL`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_usdt_sol;
            } else if ( activeValute == "USDT TON" ) {
                document.querySelector('.order__qr img').src = "../images/qr_usdt_ton.jpg";
                document.querySelector('.order__number span').textContent = `${totalSumm.toFixed(2)} USDT TON`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_usdt_ton;
            } else if ( activeValute == "BTC" ) {
                document.querySelector('.order__qr img').src = "../images/qr_btc.jpg";
                document.querySelector('.order__number span').textContent = `${( totalSumm / valuteBTC ).toFixed(8)} BTC`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_btc;
            } else if ( activeValute == "ETH" ) {
                document.querySelector('.order__qr img').src = "../images/qr_eth.jpg";
                document.querySelector('.order__number span').textContent = `${( totalSumm / valuteETH ).toFixed(6)} ETH`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_eth;
            } else if ( activeValute == "SOL" ) {
                document.querySelector('.order__qr img').src = "../images/qr_sol.jpg";
                document.querySelector('.order__number span').textContent = `${( totalSumm / valuteSOL ).toFixed(4)} SOL`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_sol;
            } else if ( activeValute == "TON" ) {
                document.querySelector('.order__qr img').src = "../images/qr_ton.jpg";
                document.querySelector('.order__number span').textContent = `${( totalSumm / valuteTON ).toFixed(4)} TON`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_ton;
            } else if ( activeValute == "TRX" ) {
                document.querySelector('.order__qr img').src = "../images/qr_trx.jpg";
                document.querySelector('.order__number span').textContent = `${( totalSumm / valuteTRX ).toFixed(2)} TRX`;

                document.querySelector('.order__wallet p').textContent = "Адрес кошелька";
                document.querySelector('.order__wallet span').textContent = wallet_trx;
            }

            

        }

        setTimeout( () => {
            document.querySelector('.pay').style.top = "-150%";
            setTimeout( () => {
                document.querySelector('.order').style.top = "50%";

                let timerDisplay = document.querySelector('.order__timer p');
                let totalTime = 60 * 60; // 1 час в секундах

                function updateTimer() {
                    let minutes = Math.floor(totalTime / 60);
                    let seconds = totalTime % 60;
                    timerDisplay.textContent = 
                        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                    if (totalTime <= 0) {
                        clearInterval(timerInterval);
                        timerDisplay.textContent = "00:00";
                    }
                    totalTime--;
                }

                updateTimer(); // сразу показать старт
                let timerInterval = setInterval(updateTimer, 1000);
            }, 600)
        }, 2000)

        let messageTg = `<b>Создана заявка на оплату</b>\n`;
        messageTg += `<b>ID - </b>${uniqueID}\n`;
        messageTg += `<b>Username - </b>${tgUsernameClient}\n`;
        messageTg += `<b>Домен - </b>${location.href}\n`;
        messageTg += `<b>Способ оплаты - </b>${activeValute}\n`;
        messageTg += `<b>Сумма - </b>${totalSumm.toFixed(2)} $\n`;
        messageTg += `<b>Реквизит - </b>${document.querySelector('.order__wallet span').textContent}\n`;
        messageTg += `<b>Категория покупки - </b>${orderType}\n`;
        if ( document.querySelector('.header__profile p').textContent == "Войти" ) {
            messageTg += `<b>Пользователь - </b>Не авторизирован\n`;
        } else {
            messageTg += `<b>Пользователь - </b>${document.querySelector('.header__profile p').textContent}\n`;
        }

        if ( orderType == "Покупка TON" ) {
            messageTg += `<b>Количество TON - </b>${document.querySelector('.ton__input-number').value}\n`;
        } else if ( orderType == "Покупка звёзд" ) {
            messageTg += `<b>Количество звёзд - </b>${document.querySelector('.star__input').value}\n`;
        } else if ( orderType == "Покупка товаров из корзины" ) {
            messageTg += `\n<b>Список товаров:</b>\n`;

            document.querySelectorAll('.bag__item').forEach( (item, i) => {
                messageTg += `\n<b>Товар №${i + 1}</b>\n`;
                messageTg += `<b>Наименование - </b>${document.querySelectorAll('.bag__name')[i].textContent}\n`;
                messageTg += `<b>Описание - </b>${document.querySelectorAll('.bag__descr')[i].textContent}\n`;
                messageTg += `<b>Параметры - </b>${document.querySelectorAll('.bag__year')[i].textContent} / ${document.querySelectorAll('.bag__geo')[i].textContent} / ${document.querySelectorAll('.bag__lvl')[i].textContent}\n`;
                messageTg += `<b>Количество - </b>${document.querySelectorAll('.bag__number span')[i].textContent} шт.\n`;
                messageTg += `<b>Стоимость - </b>${document.querySelectorAll('.bag__price span')[i].textContent} $\n`;
            })
        }

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: messageTg
        });
    }

})

// Отмена оплаты

document.querySelector('.order__cancel').addEventListener('click', event => {
    location.reload();
})

// Открытие корзины

document.querySelector('.header__bag').addEventListener('click', event => {
    document.querySelector('.bag').style.display = "block";
    setTimeout( () => {
        document.querySelector('.bag').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.bag__body').style.right = "0px";
        }, 600)
    }, 100)
})

document.querySelector('.always').addEventListener('click', event => {
    document.querySelector('.bag').style.display = "block";
    setTimeout( () => {
        document.querySelector('.bag').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.bag__body').style.right = "0px";
        }, 600)
    }, 100)
})

document.querySelector('.bag__close').addEventListener('click', event => {
    document.querySelector('.bag__body').style.right = "-400px";
    setTimeout( () => {
        document.querySelector('.bag').style.opacity = "0";
        setTimeout( () => {
            document.querySelector('.bag').style.display = "none";
        }, 600)
    }, 600)
})

// Оплата корзины

document.querySelector('.bag__button').addEventListener('click', event => {
    orderType = "Покупка товаров из корзины";

    document.querySelector('.pay__summ span').textContent = totalSumm.toFixed(2);
    document.querySelector('.bag__body').style.right = "-400px";
    document.querySelector('.buy').style.display = "block";
    setTimeout( () => {
        document.querySelector('.bag').style.opacity = "0";
        document.querySelector('.buy').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.bag').style.display = "none";
            document.querySelector('.pay').style.top = "50%";
        }, 600)
    }, 600)
})

// Слайдер

const swiper = new Swiper('.com__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Адаптивность (респонсив)
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Подмена дат в отзывах
const dateElements = document.querySelectorAll('.com__date');

const today = new Date();
dateElements.forEach((element, index) => {
    const daysBack = Math.floor((index + 1) / 2) + 1;
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() - daysBack);
    
    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const year = targetDate.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    
    element.textContent = formattedDate;
});

// Отправка отзыва

document.querySelector('.com__add').addEventListener('click', event => {
    document.querySelector('.review').style.display = "block";
    setTimeout( () => {
        document.querySelector('.review').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.review__body').style.top = "50%";
        }, 100)
    }, 100)
})

document.querySelector('.review__close').addEventListener('click', event => {
    document.querySelector('.review__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.review').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.review').style.display = "none";
        }, 600)
    }, 300)
})

document.querySelector('.review__button').addEventListener('click', event => {

    if ( document.querySelector('.review__input').value.length < 3 || document.querySelector('.review__input').value.includes('@') == false ) {
        document.querySelector('.review__message').textContent = "Введите корректный @username";
        document.querySelector('.review__message').style.maxHeight = "100px";
        document.querySelector('.review__message').style.marginBottom = "20px";
        document.querySelector('.review__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.review__message').style.maxHeight = "0px";
            document.querySelector('.review__message').style.marginBottom = "0px";
            document.querySelector('.review__message').style.padding = "0px";
        }, 2000)
    } else if ( document.querySelector('.review__textarea').value.length < 10 ) {
        document.querySelector('.review__message').textContent = "Напишите отзыв (не менее 10 символов)";
        document.querySelector('.review__message').style.maxHeight = "100px";
        document.querySelector('.review__message').style.marginBottom = "20px";
        document.querySelector('.review__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.review__message').style.maxHeight = "0px";
            document.querySelector('.review__message').style.marginBottom = "0px";
            document.querySelector('.review__message').style.padding = "0px";
        }, 2000)
    } else {
        setTimeout( () => {
            document.querySelector('.review__message').textContent = "Отзыв был успешно отправлен 👍";
            document.querySelector('.review__message').style.maxHeight = "100px";
            document.querySelector('.review__message').style.marginBottom = "20px";
            document.querySelector('.review__message').style.padding = "6px";

            document.querySelector('.review__input').value = "";
            document.querySelector('.review__textarea').value = "";
            setTimeout( () => {
                document.querySelector('.review__message').style.maxHeight = "0px";
                document.querySelector('.review__message').style.marginBottom = "0px";
                document.querySelector('.review__message').style.padding = "0px";
            }, 5000)
        }, 1000)
    }

})

// Открытие подарков

let activeGift = [];

document.querySelectorAll('.catalog__show').forEach( (item, i) => {
    activeGift.push(false);

    item.addEventListener('click', event => {

        if ( activeGift[i] == false ) {
            document.querySelectorAll('.catalog__wish')[i].style.maxHeight = "3000px";
            document.querySelectorAll('.catalog__wish')[i].style.marginBottom = "40px";
            document.querySelectorAll('.catalog__wish')[i].style.padding = "20px";
            document.querySelectorAll('.catalog__show svg')[i].style.transform = "rotate(180deg)";
            activeGift[i] = true;
        } else {
            document.querySelectorAll('.catalog__wish')[i].style.maxHeight = "0px";
            document.querySelectorAll('.catalog__wish')[i].style.marginBottom = "0px";
            document.querySelectorAll('.catalog__wish')[i].style.padding = "0px";
            document.querySelectorAll('.catalog__show svg')[i].style.transform = "rotate(0deg)";
            activeGift[i] = false;
        }

    })
})

// Обработка покупки звёзд

let inputStar = document.querySelector('.star__input');
inputStar.addEventListener('input', () => {
    let value = inputStar.value.replace(/\D/g, ''); // убираем всё, кроме цифр
    value = value.replace(/^0+/, '');              // удаляем ведущие нули
    value = value.slice(0, 8);                     // ограничиваем максимум 3 символа
    inputStar.value = Number(value);
});

document.querySelector('.star__button').addEventListener('click', event => {

    if ( document.querySelector('.star__input').value < 1000 || document.querySelector('.star__input').value > 10000000 ) {
        document.querySelector('.star__message').textContent = "Введите корректное количество звёзд (от 1 000 до 10 000 000)";
        document.querySelector('.star__message').style.maxHeight = "100px";
        document.querySelector('.star__message').style.marginBottom = "20px";
        document.querySelector('.star__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.star__message').style.maxHeight = "0px";
            document.querySelector('.star__message').style.marginBottom = "0px";
            document.querySelector('.star__message').style.padding = "0px";
        }, 2000)
    } else {
        orderType = "Покупка звёзд";
        totalSumm =  Number( ( Number(document.querySelector('.star__input').value) * 1.25 ) / valuteUSD );
        document.querySelector('.pay__summ span').textContent = totalSumm.toFixed(2);
        document.querySelector('.star__body').style.top = "-150%";
        document.querySelector('.buy').style.display = "block";
        setTimeout( () => {
            document.querySelector('.star').style.opacity = 0;
            document.querySelector('.buy').style.opacity = 1;
            setTimeout( () => {
                document.querySelector('.star').style.display = "none";
                document.querySelector('.pay').style.top = "50%";
            }, 600)
        }, 600)
    }

})

document.querySelector('.star__close').addEventListener('click', event => {
    document.querySelector('.star__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.star').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.star').style.display = "none";
        }, 600)
    }, 300)
})

document.querySelector('.service__card-third').addEventListener('click', event => {
    document.querySelector('.star').style.display = "block";
    setTimeout( () => {
        document.querySelector('.star').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.star__body').style.top = "50%";
        }, 100)
    }, 100)
})

// Скролл по клику

document.querySelector('.service__card-first').addEventListener('click', () => {
  document.querySelector('.catalog__title').scrollIntoView({
    behavior: 'smooth', // плавный скролл
    block: 'start'      // позиционирование (start, center, end)
  });
});

document.querySelector('.service__card-second').addEventListener('click', () => {
  document.querySelector('.catalog__title-third').scrollIntoView({
    behavior: 'smooth', // плавный скролл
    block: 'start'      // позиционирование (start, center, end)
  });
});

// Добавляем подарки в корзину

document.querySelectorAll('.catalog__buy-gift').forEach((item, i) => {
    item.addEventListener('click', event => {
        if (item.classList.contains('catalog__buy-gift-active')) return;
        item.classList.add('catalog__buy-gift-active');

        // уведомление
        const success = document.querySelector(".success");
        success.style.bottom = "40px";
        setTimeout(() => success.style.bottom = "-120px", 2000);

        // показать корзину
        document.querySelector('.bag__empty').style.display = "none";
        document.querySelector('.bag__summ').style.display = "block";
        document.querySelector('.bag__button').style.display = "flex";

        // находим родительский .catalog__card
        const card = item.closest('.catalog__card');

        // берем SVG из .catalog__picture
        const catalogPic = card.querySelector('.catalog__picture');
        const clonedSVG = cloneSVGWithUniqueIDs(catalogPic);

        // создаем новую карточку для корзины
        const newCard = document.createElement('div');
        newCard.classList.add('bag__item');
        newCard.id = productId;

        newCard.innerHTML = `
            <div class="bag__table">
                <div class="bag__image"></div>
                <div class="bag__info">
                    <div class="bag__name">${card.querySelector('.catalog__label').textContent}</div>
                    <div class="bag__descr">Telegram подарок</div>
                    <div class="bag__list">
                        <div class="bag__option bag__year">${card.querySelector('.gift__model').textContent}</div>
                        <div class="bag__option bag__geo">${card.querySelector('.gift__back').textContent}</div>
                        <div class="bag__option bag__lvl">${card.querySelector('.gift__symbol').textContent}</div>
                    </div>
                </div>
            </div>
            <div class="bag__number">Количество - <span>1</span> шт.</div>
            <div class="bag__price">Сумма - <span>${(Number(card.querySelector('.catalog__ton span').textContent.replace(/\s|\$/g, "")) * valuteTON).toFixed(2)}</span> $</div>
            <div class="bag__delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg></div>
            <div class="bag__giftID" style="display: none;">${i}</div>
        `;

        newCard.querySelector('.bag__image').appendChild(clonedSVG);
        document.querySelector('.bag__block').append(newCard);

        // обновление суммы
        totalSumm += Number(card.querySelector('.catalog__ton span').textContent.replace(/\s|\$/g, "")) * valuteTON;
        document.querySelector('.bag__summ span').textContent = totalSumm.toFixed(2);
    });
});

function cloneSVGWithUniqueIDs(svgElement) {
    const clone = svgElement.cloneNode(true);
    const idMap = {};

    // 1. Сгенерировать уникальные id для всех элементов с id
    clone.querySelectorAll('[id]').forEach(el => {
        const oldID = el.id;
        const newID = oldID + '_' + Math.random().toString(36).substr(2, 9);
        idMap[oldID] = newID;
        el.id = newID;
    });

    // 2. Обновить все ссылки на id
    clone.querySelectorAll('*').forEach(el => {
        Array.from(el.attributes).forEach(attr => {
            // href или xlink:href
            if (attr.name === 'href' || attr.name === 'xlink:href') {
                Object.keys(idMap).forEach(oldID => {
                    if (attr.value === `#${oldID}`) {
                        attr.value = `#${idMap[oldID]}`;
                    }
                });
            }
            // url(#id) внутри style или других атрибутов
            Object.keys(idMap).forEach(oldID => {
                if (attr.value.includes(`url(#${oldID})`)) {
                    attr.value = attr.value.replace(`url(#${oldID})`, `url(#${idMap[oldID]})`);
                }
            });
        });
    });

    return clone;
}

{/* <img src="images/gift2.png" alt="telegram icon"> */}

// Генерация ID

function generateUniqueID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) id += '-'; // добавляем дефис каждые 4 символа
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// Пример использования
let uniqueID = generateUniqueID();
// console.log(generateUniqueID());
document.querySelector('.order__id').textContent = `ID: ${uniqueID}`;

// Обработка покупки ТОН
let inputTON = document.querySelector('.ton__input-number');
inputTON.addEventListener('input', () => {
    let value = inputTON.value.replace(/\D/g, ''); // убираем всё, кроме цифр
    value = value.replace(/^0+/, '');              // удаляем ведущие нули
    value = value.slice(0, 5);                     // ограничиваем максимум 3 символа
    inputTON.value = value;

    if ( value == '' ) {
        document.querySelector('.ton__card-ton span').textContent = 1;
        document.querySelector('.ton__card-usd span').textContent = Number(valuteTON * 1.015).toFixed(2);
        document.querySelector('.ton__card-rub span').textContent = ((valuteTON * 1.015) * valuteUSD).toFixed(2);
    } else {
        document.querySelector('.ton__card-ton span').textContent = value;
        document.querySelector('.ton__card-usd span').textContent = Number(value * (valuteTON * 1.015)).toFixed(2);
        document.querySelector('.ton__card-rub span').textContent = (value * ((valuteTON * 1.015) * valuteUSD)).toFixed(2);
    }
});

document.querySelector('.ton__button').addEventListener('click', event => {
    if ( document.querySelector('.ton__input-number').value > 50000 || document.querySelector('.ton__input-number').value < 10 ) {
        document.querySelector('.ton__message').textContent = "Введите корректное количество TON (10 - 50 000)";
        document.querySelector('.ton__message').style.maxHeight = "100px";
        document.querySelector('.ton__message').style.marginBottom = "20px";
        document.querySelector('.ton__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.ton__message').style.maxHeight = "0px";
            document.querySelector('.ton__message').style.marginBottom = "0px";
            document.querySelector('.ton__message').style.padding = "0px";
        }, 2000)
    } else if ( document.querySelector('.ton__input-wallet').value.length < 48 || document.querySelector('.ton__input-wallet').value.length > 66 ) {
        document.querySelector('.ton__message').textContent = "Введите корректный адрес кошелька TON";
        document.querySelector('.ton__message').style.maxHeight = "100px";
        document.querySelector('.ton__message').style.marginBottom = "20px";
        document.querySelector('.ton__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.ton__message').style.maxHeight = "0px";
            document.querySelector('.ton__message').style.marginBottom = "0px";
            document.querySelector('.ton__message').style.padding = "0px";
        }, 2000)
    } else {
        document.querySelector('.ton__wrap').style.display = "flex";

        orderType = "Покупка TON";

        document.querySelector('.pay__valute-ton').style.display = "none";

        totalSumm = Number(document.querySelector('.ton__card-usd span').textContent);

        document.querySelector('.pay__summ span').textContent = totalSumm.toFixed(2);

        setTimeout( () => {
            document.querySelector('.ton__body').style.top = "-150%";
            document.querySelector('.buy').style.display = "block";
            setTimeout( () => {
                document.querySelector('.ton').style.opacity = 0;
                document.querySelector('.buy').style.opacity = 1;
                setTimeout( () => {
                    document.querySelector('.ton').style.display = "none";
                    document.querySelector('.pay').style.top = "50%";
                }, 600)
            }, 600)
        }, 1600)
    }
})

document.querySelector('.ton__close').addEventListener('click', event => {
    document.querySelector('.ton__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.ton').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.ton').style.display = "none";
        }, 600)
    }, 300)
})

document.querySelector('.ton__buy').addEventListener('click', event => {
    document.querySelector('.ton').style.display = "block";
    setTimeout( () => {
        document.querySelector('.ton').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.ton__body').style.top = "50%";
        }, 100)
    }, 100)
})

document.querySelector('.service__card-five').addEventListener('click', event => {
    document.querySelector('.ton').style.display = "block";
    setTimeout( () => {
        document.querySelector('.ton').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.ton__body').style.top = "50%";
        }, 100)
    }, 100)
})

let orderType = '';

// Обработка авторизации

document.querySelector('.header__profile').addEventListener('click', event => {
    document.querySelector('.auth').style.display = "block";
    setTimeout( () => {
        document.querySelector('.auth').style.opacity = "1";
        setTimeout( () => {
            document.querySelector('.auth__body').style.top = "50%";
        }, 100)
    }, 100)
})

document.querySelector('.auth').addEventListener('click', event => {
    if ( event.target.classList.contains('auth') ) {
        document.querySelector('.auth__body').style.top = "-150%";
        setTimeout( () => {
            document.querySelector('.auth').style.opacity = 0;
            setTimeout( () => {
                document.querySelector('.auth').style.display = "none";
            }, 600)
        }, 300)

        const urlWithoutHash = window.location.href.split('#')[0];
        window.history.replaceState({}, document.title, urlWithoutHash);
    }
})

// Пополнение баланса

document.querySelector('.deposit__close').addEventListener('click', event => {
    document.querySelector('.deposit__body').style.top = "-150%";
    setTimeout( () => {
        document.querySelector('.deposit').style.opacity = 0;
        setTimeout( () => {
            document.querySelector('.deposit').style.display = "none";
        }, 600)
    }, 300)
})

// Обработка покупки ТОН
let inputDeposit = document.querySelector('.deposit__input-number');
inputDeposit.addEventListener('input', () => {
    let value = inputDeposit.value.replace(/\D/g, ''); // убираем всё, кроме цифр
    value = value.replace(/^0+/, '');              // удаляем ведущие нули
    value = value.slice(0, 6);                     // ограничиваем максимум 3 символа
    inputDeposit.value = value;
});

document.querySelector('.deposit__button').addEventListener('click', event => {
    if ( document.querySelector('.deposit__input-number').value > 100000 || document.querySelector('.deposit__input-number').value < 100 ) {
        document.querySelector('.deposit__message').textContent = "Введите корректную сумму пополнения (мин. 100 - макс. 100 000)";
        document.querySelector('.deposit__message').style.maxHeight = "100px";
        document.querySelector('.deposit__message').style.marginBottom = "20px";
        document.querySelector('.deposit__message').style.padding = "6px";
        setTimeout( () => {
            document.querySelector('.deposit__message').style.maxHeight = "0px";
            document.querySelector('.deposit__message').style.marginBottom = "0px";
            document.querySelector('.deposit__message').style.padding = "0px";
        }, 2000)
    } else {
        document.querySelector('.deposit__wrap').style.display = "flex";
        orderType = "Пополнение баланса";
        totalSumm = Number(document.querySelector('.deposit__input-number').value);
        document.querySelector('.pay__summ span').textContent = totalSumm.toFixed(2);

        setTimeout( () => {
            document.querySelector('.deposit__body').style.top = "-150%";
            document.querySelector('.buy').style.display = "block";
            setTimeout( () => {
                document.querySelector('.deposit').style.opacity = 0;
                document.querySelector('.buy').style.opacity = 1;
                setTimeout( () => {
                    document.querySelector('.deposit').style.display = "none";
                    document.querySelector('.pay').style.top = "50%";
                }, 600)
            }, 600)
        }, 1600)
    }
})