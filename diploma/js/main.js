const swiper = new Swiper('.swiper', {
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },

  navigation: {
    nextEl: '.section__new-arrow-right',
    prevEl: '.section__new-arrow-left',
  },

  scrollbar: {
    el: '.swiper-scrollbar',

  },
});

// =========================================

(function () {
  const selectors = [
    '.electroHub__gadgets-listone',
    '.electroHub__gadgets-listtwo',
    '.electroHub__gadgets-listthree',
    '.electroHub__gadgets-listfour'
  ].join(', ');

  const cards = document.querySelectorAll(selectors);

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Закрываем все блоки кроме текущего
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('card--active');
        }
      });

      // Переключаем текущий блок
      card.classList.toggle('card--active');
    });
  });
})();

// =========================================≈

document.querySelectorAll(".extra__tag").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".extra__help-input").value = button.textContent;
  });
});

// =========================================≈


