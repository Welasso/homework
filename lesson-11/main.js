const btn = document.querySelector(".btn-open");
const modal = document.querySelector(".modal");
const body = document.body;
/* Создаем функцию для открытия окна */
const openModal = () => {
  modal.classList.add("modal--open");
  body.classList.add("body--fixed");
};

btn.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.remove("modal--open");
  body.classList.remove("body--fixed");
};
/* Закрытие окна */

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    (target && target.classList.contains("modal")) ||
    target.classList.contains("modal__close-btn")
  ) {
    closeModal();
  }
});

/* Навешиваем закрытие вкладки по нажатием на клавишу */

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && modal.classList.contains("modal--open")) {
    closeModal();
  }
});
