
const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.edit__avatar__edit_img');
const overlay = document.querySelector('.popup__overlay');
const popup = document.querySelector('.popup');
const newName = document.querySelector('.popup__form_input-name')
const newJob = document.querySelector('.popup__form_input-job')
const nameText = document.querySelector('.edit__avatar__edit_title');
const jobText = document.querySelector('.edit__avater_subtitle');
const salve = document.querySelector('.popup__form_bnt-submit');
const like = document.querySelector('.element__card_like')

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