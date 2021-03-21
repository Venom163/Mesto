const popup = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const likes = document.querySelectorAll('.elements__footer-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-input_type_name');
let jobInput = document.querySelector('.popup__form-input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');




function closePopup () {
    popup.classList.remove('popup_visible');              // закрытие попапа по клопке
}
popupCloseBtn.addEventListener('click', closePopup);



const closeByOverlay = (evt, popup) => { // Фунцкия закрытия по оверлэй
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
}
popup.addEventListener ('click', function (evt) {
    closeByOverlay(evt, popup )
})



function openPopup() {
    popup.classList.add('popup_visible');     // Открытие попапа
}
profileEditBtn.addEventListener('click', openPopup);



function likeChange() {
	this.classList.toggle('elements__footer-button_active');    // Функция тыкания сердечек
}

for (let i = 0; i < likes.length; i++) {
	likes[i].addEventListener('click', likeChange);
}





function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_visible');
}



formElement.addEventListener('submit', formSubmitHandler);


