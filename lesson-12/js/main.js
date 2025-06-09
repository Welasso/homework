/* 📱 Бургер-меню */
(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }

  /* 🪟 Модальное окно*/

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }

  }

  /* 🗂️ Вкладки (табы) */

  const tabControls = document.querySelector('.tab__controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab__controls-link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab__controls-link--active')) return


    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab__controls-link--active')
    const activeContent = document.querySelector('.tab-content--show')

    activeControl.classList.remove('tab__controls-link--active')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab__controls-link--active')
    tabContent.classList.add('tab-content--show')
  }

  /* Аккордеон */

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      // Если клик был по уже открытой вкладке — просто закрыть и выйти
      if (accordionOpenedItem === accordionItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionContent.style.maxHeight = null;
        return;
      }

      // Закрыть открытую вкладку
      if (accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        if (accordionOpenedContent) accordionOpenedContent.style.maxHeight = null;
      }

      // Открыть новую вкладку
      accordionItem.classList.add('accordion-list__item--opened');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    });
  });


})()