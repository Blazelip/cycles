'use strict';

(() => {

const menu = document.querySelector(`.menu`);
const menuToggle = document.querySelector(`.menu__toggle`);

const onMenuPressEsc = (evt) => {
  if (evt.key === `Escape`) {
    closeMenu();
  }
};

const openMenu = () => {
  menu.classList.remove(`menu--closed`);
  menu.classList.add(`menu--opened`);
  document.addEventListener(`keydown`, onMenuPressEsc);
};

const closeMenu = () => {
  menu.classList.remove(`menu--opened`);
  menu.classList.add(`menu--closed`);
  document.removeEventListener(`keydown`, onMenuPressEsc);
};

if (menu && menuToggle) {
  menu.classList.remove(`menu--nojs`);

  menuToggle.addEventListener(`click`, () => {
    if (menu.classList.contains(`menu--closed`)) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}

})();
