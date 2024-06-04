
const closeButton = document.querySelector('.popup__close');
const openButton = document.querySelector('.profile__edit-avatar');
const overlay = document.querySelector('.popup__overlay');
const popup = document.querySelector('.popup');
const newName = document.querySelector('.popup__input-name')
const newJob = document.querySelector('.popup__input-job')
const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');
const salve = document.querySelector('.popup__button-submit');
const like = document.querySelector('.gallery__elements__element__card_like')

function fecharPopup(){
    popup.classList.remove("popup__opened")
}
closeButton.addEventListener('click', fecharPopup);


openButton.addEventListener('click', () => {
    popup.classList.add("popup__opened")
    newName.value = nameText.textContent;
    newJob.value = jobText.textContent;
});


function handleFormSubmit (e) {
    e.preventDefault();
    nameText.textContent = newName.value;
    jobText.textContent = newJob.value;
    
    fecharPopup()
}

salve.addEventListener("click", handleFormSubmit)