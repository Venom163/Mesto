const popup = document.querySelector('.popup');
const profileEditBtn = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const likes = document.querySelectorAll('.elements__footer-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-input_type_name');
let jobInput = document.querySelector('.popup__form-input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');




function openPopup() {
    popup.classList.add('popup_visible');                   // Открытие попапа
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}


function closePopup () {
    popup.classList.remove('popup_visible');                // закрытие попапа по клопке
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}




popupCloseBtn.addEventListener('click', closePopup);

profileEditBtn.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);













                                                               














