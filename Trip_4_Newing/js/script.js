const citySelect = document.querySelector("#citySelect");
const nightsInput = document.querySelector("#nightsInput");
const guestsInput = document.querySelector("#guestsInput");
const breakfastInput = document.querySelector("#breakfastInput");
const hotelPrice = document.querySelector("#hotelPrice");
const calcNights = document.querySelector("#calcNights");
const starsSelect = document.querySelector("#starsSelect");
const nightsValue = document.querySelector("#nightsValue");
const calcResult = document.querySelector("#calcResult");

const cityBase = {
  sochi: 6200,
  antalya: 7800,
  spb: 5400,
  dubai: 12800
};

function rub(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function updateHeroPrice() {
  if (!citySelect || !nightsInput || !guestsInput || !breakfastInput || !hotelPrice) return;
  const nights = Math.max(1, Number(nightsInput.value || 1));
  const guests = Math.max(1, Number(guestsInput.value || 1));
  const base = cityBase[citySelect.value] || cityBase.sochi;
  const breakfast = breakfastInput.checked ? 900 * guests * nights : 0;
  hotelPrice.textContent = rub(base * nights * guests + breakfast);
}

function updateCalc() {
  if (!calcNights || !starsSelect || !nightsValue || !calcResult) return;
  const nights = Number(calcNights.value);
  const starRate = { 3: 5200, 4: 7000, 5: 11800 }[starsSelect.value] || 7000;
  nightsValue.textContent = nights + " " + (nights === 1 ? "ночь" : "ночей");
  calcResult.textContent = rub(starRate * nights * 2);
}

citySelect?.addEventListener("change", updateHeroPrice);
nightsInput?.addEventListener("input", updateHeroPrice);
guestsInput?.addEventListener("input", updateHeroPrice);
breakfastInput?.addEventListener("change", updateHeroPrice);
calcNights?.addEventListener("input", updateCalc);
starsSelect?.addEventListener("change", updateCalc);
updateHeroPrice();
updateCalc();
