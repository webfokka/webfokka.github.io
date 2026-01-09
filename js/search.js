// === Поиск по товарам (search.js) ===

const searchInput = document.querySelector('.search__input input');
const searchBlock = document.querySelector('.search__block');
const searchClose = document.querySelector('.search__close');

if (!searchInput || !searchBlock) {
  console.warn('Элементы поиска не найдены на странице');
}

// Ждём загрузки продуктов
function initSearch() {
  if (!window.allProducts) {
    // Если продукты ещё не загружены — ждём
    setTimeout(initSearch, 100);
    return;
  }

  // Фокус на инпут при открытии поиска (если нужно — можно вызвать извне)
  searchInput.focus();

  // Слушаем ввод
  searchInput.addEventListener('input', performSearch);

  // Закрытие поиска (если есть логика открытия/закрытия)
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      document.querySelector('.search').classList.remove('active'); // предположим, что у тебя есть класс active для открытия
      // searchInput.value = '';
      // searchBlock.innerHTML = '';
    });
  }

  // Начальный поиск (пустой)
  performSearch();
}


// Основная функция поиска
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();

  // Очищаем блок
  searchBlock.innerHTML = '';

  if (query === '') {
    searchBlock.innerHTML = '<div style="display: flex; justify-content: flex-start; align-items: center; gap: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/></svg><p class="search__empty">Start typing to search products...</p></div>';
    return;
  }

  // Фильтруем товары по названию
  const results = window.allProducts.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchBlock.innerHTML = '<p class="search__empty">Nothing found</p>';
    return;
  }

  // Показываем до 10 результатов (чтобы не перегружать)
  results.slice(0, 10).forEach(product => {
    const firstImg = product.images[0] || 'images/placeholder.webp';

    const cardHTML = `
      <a href="product.html?item=${product.id}" class="search__card">
        <div class="search__left">
          <img src="${firstImg}" alt="${product.title}" loading="lazy">
        </div>
        <div class="search__right">
          <p>${highlightMatch(product.title, query)}</p>
          <span>${product.price} ${localStorage.getItem("SportLabValuteMark")}</span>
        </div>
      </a>
    `;

    searchBlock.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Подсветка совпадений в названии (опционально, красиво)
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Запуск после загрузки продуктов
document.addEventListener('DOMContentLoaded', () => {
  initSearch();
});