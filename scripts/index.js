const popup = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupOverLay = document.querySelector('.popup__overlay');
const likes = document.querySelectorAll('.element__footer-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-input_type_name');
let jobInput = document.querySelector('.popup__form-input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');


function closePopup (evt) {
    if (evt.target === popupOverLay || evt.target === popupCloseBtn) {  //Функция закрытия попапа при клике на кнопку крестика и оверлея
        popup.classList.remove('popup_visible');
    }    
}


function likeChange() {
	this.classList.toggle('element__footer-button_active');    // Функция тыкания сердечек
}

for (let i = 0; i < likes.length; i++) {
	likes[i].addEventListener('click', likeChange);
}


function openPopup() {
    popup.classList.add('popup_visible');     // Открытие попапа
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_visible');
}


profileEditBtn.addEventListener('click', openPopup);
popupOverLay.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


