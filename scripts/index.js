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


function likeChange() {
	this.classList.toggle('elements__footer-button_active');    // Функция тыкания сердечек я не на чё не намекаю , 
}                                                                //   3 состояния для кнопки лайка , тут я подумал наверно через js реализовать , а как тогда надо было?
                                                                // https://prnt.sc/10si3rv это ссылка фото с фигмы

for (let i = 0; i < likes.length; i++) {
	likes[i].addEventListener('click', likeChange);
}



popupCloseBtn.addEventListener('click', closePopup);

profileEditBtn.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);







/*const closeByOverlay = (evt, popup) => {            // Фунцкия закрытия по оверлэй
    if (evt.target.classList.contains('popup')) {   // Соре этого реально нет в задании , там говорится только о кнопке крестика , я просто посматрел последний стрим  и там показывали пример с реализацией закрытия при клике по оверлею и решил запариться и чётко был уверен что так надо, отсюда и оверлей и всё остальное , буду внимательней +)
      closePopup(popup);
    }
}
popup.addEventListener ('click', function (evt) {
    closeByOverlay(evt, popup )
})*/







                                                               














