// функция созданеия карточки из template
export function createCard(element, deleteCard, likeCard, openImageModal) {
  const placesContainer = document.querySelector("#card-template").content;
  const place = placesContainer.querySelector(".places__item").cloneNode(true);
  place.querySelector(".card__image").src = element.link; // наполняем содержимым
  place.querySelector(".card__image").alt = element.alt;
  place.querySelector(".card__title").textContent = element.name;
  const deleteC = place.querySelector(".card__delete-button");
  const imageBtn = place.querySelector(".card__image"); // переменные для вывода попапа картинки
  const cardLikeBtn = place.querySelector(".card__like-button"); // переменная для лайка карточки
  deleteC.addEventListener("click", deleteCard); // функция удаления карточки
  // вешаем слушатель на картинку для вывода попапа
  imageBtn.addEventListener("click", () =>
    openImageModal(element.link, element.alt, element.name)
  );
  // слушатель лайка карточки
  cardLikeBtn.addEventListener("click", () => likeCard(cardLikeBtn));
  return place;
}

// функция удаления карточки
export function deleteCard(evt) {
  const card = evt.target.closest(".places__item");
  card.remove();
}

// функция лайка карточки
export function likeCard(cardLikeBtn) {
  if (cardLikeBtn.classList.contains("card__like-button_is-active")) {
    cardLikeBtn.classList.remove("card__like-button_is-active");
  } else {
    cardLikeBtn.classList.add("card__like-button_is-active");
  }
}

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "гористая местность, на которой местами лежит снег",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "речка, которая окружена снежными лесами",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "много серых хрущевок, которые стоят в ряд",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "горная тундра Камчатки",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "железная дорога, которая проходит посреди зеленого леса",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "скалы озера Байкал зимой",
  },
];
