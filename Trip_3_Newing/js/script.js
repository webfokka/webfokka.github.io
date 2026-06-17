const budgetRange = document.querySelector("#budgetRange");
const budgetValue = document.querySelector("#budgetValue");
const matchValue = document.querySelector("#matchValue");
const directionSelect = document.querySelector("#directionSelect");
const peopleInput = document.querySelector("#peopleInput");
const supportInput = document.querySelector("#supportInput");
const servicePrice = document.querySelector("#servicePrice");

function money(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function updateFinder() {
  if (!budgetRange || !budgetValue || !matchValue || !directionSelect) return;
  const budget = Number(budgetRange.value);
  const directionBonus = {
    beach: 18,
    family: 12,
    city: 28,
    wellness: 9
  };
  const matches = Math.max(5, Math.round(budget / 7000) + directionBonus[directionSelect.value]);
  budgetValue.textContent = money(budget);
  matchValue.textContent = matches + " вариантов";
}

function updateServicePrice() {
  if (!peopleInput || !supportInput || !servicePrice) return;
  const people = Math.max(1, Number(peopleInput.value || 1));
  let price = people > 8 ? 14900 : 990;
  if (supportInput.checked) price += people > 8 ? 9000 : 2500;
  servicePrice.textContent = money(price);
}

budgetRange?.addEventListener("input", updateFinder);
directionSelect?.addEventListener("change", updateFinder);
peopleInput?.addEventListener("input", updateServicePrice);
supportInput?.addEventListener("change", updateServicePrice);
updateFinder();
updateServicePrice();
