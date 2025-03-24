export {OpenModal, closeModal};

function OpenModal(arg) {
  arg.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', handleEscKeyUp);
}

function closeModal (arg) {
  arg.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscKeyUp);
}

// Функция закрытия попапа кликом на ESC
const handleEscKeyUp = (evt) => {
    const popup = document.querySelector(".popup_is-opened"); 
    if (evt.key === "Escape") {
      closeModal(popup);
    }
  };