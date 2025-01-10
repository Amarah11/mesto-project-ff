const placesContainer = document.querySelector('#card-template').content; 
const placesList = document.querySelector('.places__list');

function createCard(element, deleteCard) {
   // инициалируем переменную, которая клонирует template
   const place = placesContainer.querySelector('.places__item').cloneNode(true);
   // наполняем содержимым
   place.querySelector('.card__image').src = element.link;
   place.querySelector('.card__image').alt = element.alt;
   place.querySelector('.card__title').textContent = element.name;

   const deleteC= place.querySelector('.card__delete-button');
   deleteC.addEventListener('click', deleteCard);
   
   return place;
}

function deleteCard() {
  const card = document.querySelector('.card__delete-button').closest('.places__item')
  card.remove();
}


function renderCard(place, placesList) {
  placesList.append(place);
}

initialCards.forEach((element) => {
  renderCard(createCard(element, deleteCard), placesList)
})