const placesContainer = document.querySelector('#card-template').content; 
const placesList = document.querySelector('.places__list');

function deleteBtn(button) {
  button.addEventListener('click', function() {
    button.closest('.places__item').remove();
  })
}


initialCards.forEach((function (element) {
  // инициалируем переменную, которая клонирует template
  const place = placesContainer.querySelector('.places__item').cloneNode(true);
  
  // наполняем содержимым
  place.querySelector('.card__image').src = element.link;
  place.querySelector('.card__title').textContent = element.name;

  // отображаем на странице
  placesList.append(place);

  // удаление карточки
  const Buttons = document.querySelectorAll('.card__delete-button');
  Buttons.forEach(deleteBtn);
}))