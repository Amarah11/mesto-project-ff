export {openModal, closeModal};

function openModal(arg) {
  arg.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', handleEscKeyUp);
}

function closeModal (arg) {
  arg.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscKeyUp);
}

// Функция закрытия попапа кликом на ESC
const handleEscKeyUp = (evt) => {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".popup_is-opened"); 
      closeModal(popup);
    }
  };