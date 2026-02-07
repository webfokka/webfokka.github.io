// // Твой API-ключ от CoinMarketCap
// const API_KEY = '033dc6c218b740169e317e096b4ad2e9'; // Уже вставлен у тебя

// // Полный список монет (с символами для CMC API)
// const coins = [
//   { symbol: 'BTC',  name: 'Bitcoin (BTC)' },
//   { symbol: 'TON',  name: 'Toncoin (TON)' },
//   { symbol: 'USDT', name: 'Tether ERC20 (USDT)' },
//   { symbol: 'USDT', name: 'Tether BEP20 (USDT)' },
//   { symbol: 'USDT', name: 'Tether TON (USDT)' },
//   { symbol: 'USDT', name: 'Tether TRC20 (USDT)' },
//   { symbol: 'USDT', name: 'Tether SOL (USDT)' }, // USDT на Solana — USDT-SOL, но агрегировано как USDT; уточни если нужно
//   { symbol: 'DAI',  name: 'Dai (DAI)' },
//   { symbol: 'DOT',  name: 'Polkadot (DOT)' },
//   { symbol: 'USDC', name: 'USD Coin SOL (USDC)' }, // USDC на Solana — USDC-SOL, но агрегировано как USDC
//   { symbol: 'USDC', name: 'USD Coin ERC20 (USDC)' }, // Общий для ERC20
//   { symbol: 'SOL',  name: 'Solana (SOL)' },
//   { symbol: 'POL',  name: 'Polygon (POL)' },
//   { symbol: 'ETH',  name: 'Ethereum Arbitrum (ETH)' }, // ETH на Arbitrum — bridged, цена как ETH
//   { symbol: 'ARB',  name: 'Arbitrum one (ARB)' },
//   { symbol: 'ETH',  name: 'Ethereum (ETH)' },
//   { symbol: 'ETH',  name: 'Ethereum Optimism (ETH)' }, // ETH на Optimism — bridged, цена как ETH
//   { symbol: 'LTC',  name: 'Litecoin (LTC)' },
//   { symbol: 'BCH',  name: 'Bitcoin Cash (BCH)' },
//   { symbol: 'DASH', name: 'Dash (DASH)' },
//   { symbol: 'ZEC',  name: 'Zcash (ZEC)' },
//   { symbol: 'BNB',  name: 'Binance Coin (BNB BEP20)' },
//   { symbol: 'XRP',  name: 'Ripple (XRP)' },
//   { symbol: 'DOGE', name: 'Dogecoin (DOGE)' },
//   { symbol: 'ETC',  name: 'Ethereum Classic (ETC)' },
//   { symbol: 'XMR',  name: 'Monero (XMR)' },
//   { symbol: 'XLM',  name: 'Stellar (XLM)' },
//   { symbol: 'TRX',  name: 'Tron (TRX)' }
// ];

// // Функция получения цен (с прокси)
// async function getPrices() {
//   const symbols = coins.map(c => c.symbol).filter((s, i, arr) => arr.indexOf(s) === i).join(','); // Уникальные символы (ETH/USDC дублируются)
//   // Добавляем прокси перед URL
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const targetUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbols}`;

//   try {
//     const response = await fetch(proxyUrl + targetUrl, {
//       method: 'GET',
//       headers: {
//         'X-CMC_PRO_API_KEY': API_KEY,
//         'Accept': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//     }

//     const data = await response.json();
//     const quotes = data.data;

//     console.clear();
//     console.log("Курсы криптовалют (CoinMarketCap API via Proxy) — " + new Date().toLocaleTimeString() + "\n");

//     coins.forEach(coin => {
//       const quote = quotes[coin.symbol];
//       if (quote && quote.quote && quote.quote.USD) {
//         const priceData = quote.quote.USD;
//         const price = priceData.price.toLocaleString('ru-RU', {
//           minimumFractionDigits: priceData.price < 1 ? 6 : 2,
//           maximumFractionDigits: priceData.price < 1 ? 6 : 2
//         });
//         const change = priceData.percent_change_24h ? ` (${priceData.percent_change_24h.toFixed(2)}% за 24ч)` : '';
//         console.log(`${coin.symbol.padEnd(10)} ${price} USD${change} | ${coin.name}`);
//       } else {
//         console.log(`${coin.symbol.padEnd(10)} Нет данных | ${coin.name}`);
//       }
//     });

//   } catch (err) {
//     console.error("Ошибка:", err.message);
//     console.log("Совет: Если прокси не работает — активируй https://cors-anywhere.herokuapp.com/corsdemo");
//   }
// }

// // Запуск + обновление каждые 60 сек
// getPrices();
// setInterval(getPrices, 60_000);