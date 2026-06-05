const tripsRange = document.querySelector("#tripsRange");
const tripsValue = document.querySelector("#tripsValue");
const calcPrice = document.querySelector("#calcPrice");

function formatRub(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽/мес";
}

function updateCalculator() {
  if (!tripsRange || !tripsValue || !calcPrice) return;
  const trips = Number(tripsRange.value);
  let price = 9900;
  if (trips > 150 && trips <= 900) price = 29900;
  if (trips > 900) price = 79900 + Math.ceil((trips - 900) / 250) * 7000;
  tripsValue.textContent = new Intl.NumberFormat("ru-RU").format(trips);
  calcPrice.textContent = formatRub(price);
}

tripsRange?.addEventListener("input", updateCalculator);
updateCalculator();
