const tripInput = document.querySelector("#tripInput");
const apiInput = document.querySelector("#apiInput");
const priceOutput = document.querySelector("#priceOutput");

function rub(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽/мес";
}

function updatePrice() {
  if (!tripInput || !apiInput || !priceOutput) return;
  const trips = Math.max(20, Number(tripInput.value || 20));
  let price = 12000;
  if (trips > 80 && trips <= 700) price = 34000;
  if (trips > 700) price = 68000 + Math.ceil((trips - 700) / 300) * 9000;
  if (apiInput.checked) price += 15000;
  priceOutput.textContent = rub(price);
}

tripInput?.addEventListener("input", updatePrice);
apiInput?.addEventListener("change", updatePrice);
updatePrice();
