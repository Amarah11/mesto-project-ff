import "./index.css";
import { initialCards, createCard, deleteCard, likeCard } from "./components/cards";
import "./components/modal";
import { openModal, closeModal } from "./components/modal";

const placesList = document.querySelector(".places__list");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileAddBtn = document.querySelector(".profile__add-button");
const editPopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const imageOfImagePopup = document.querySelector(".popup__image");
const imagePopupCaption = document.querySelector(".popup__caption");
const addForm = document.forms["new-place"]; // переменная формы добавления карточек
const editForm = document.forms["edit-profile"]; // переменные для формы редактирования профиля
const name = document.querySelector(".profile__title");
const descr = document.querySelector(".profile__description");

// функция рендера карточки
function renderCard(place, placesList) {
  placesList.append(place);
}

// вывлод карточек на страничку
initialCards.forEach((element) => {
  renderCard(
    createCard(element, deleteCard, likeCard, openImageModal),
    placesList
  );
});

// функция открытия попапа карточки
function openImageModal(src, alt, capt) {
  imageOfImagePopup.src = src;
  imageOfImagePopup.alt = alt;
  imagePopupCaption.textContent = capt;
  openModal(imagePopup);
}

// функция вывода попапа редактирования профиля
function editProfile() {
  filingPopup();
  openModal(editPopup);
}

// функция вывода попапа добавления новой карточки
function addCard() {
  openModal(newCardPopup);
}

// функция слушателя закрытия попапов
function addListener(arg) {
  const closeButton = arg.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closeModal(arg);
  });
  arg.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeModal(arg);
    }
  });
}

// функция заполнения данных в попап редактивания профиля
function filingPopup() {
  const nameInput = editForm.elements.name;
  const descrInput = editForm.elements.description;
  nameInput.value = name.textContent;
  descrInput.value = descr.textContent;
}

// функция редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = editForm.elements.name;
  const descrInput = editForm.elements.description;
  name.textContent = nameInput.value;
  descr.textContent = descrInput.value;
  closeModal(editPopup);
}

// функция добавления новой карточки
function addNewCardSubmin(evt) {
  evt.preventDefault();
  const placeName = addForm.elements["place-name"].value;
  const link = addForm.elements["link"].value;
  const newCardObj = {
    name: placeName,
    link: link,
    alt: placeName,
  };
  const newCard = createCard(newCardObj, deleteCard, likeCard, openImageModal);
  placesList.prepend(newCard);
  closeModal(newCardPopup);
  addForm.elements["place-name"].value = '';
  addForm.elements["link"].value = '';
}

// слушаели для вывода модальных окон
profileEditBtn.addEventListener("click", editProfile);
profileAddBtn.addEventListener("click", addCard);

// слушатели для закрытия модальных окон
addListener(editPopup);
addListener(newCardPopup);
addListener(imagePopup);

// слушатель на кнопку редактирования профиля
editForm.addEventListener("submit", handleProfileFormSubmit);

// слушатель на кнопку добавления карточки
addForm.addEventListener("submit", addNewCardSubmin);
