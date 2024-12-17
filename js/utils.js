export const closeButton = document.querySelector('#close-one');
export const openButton = document.querySelector('.profile__edit-avatar');
export const popup = document.querySelector('#popupOne');
export const popupTwo = document.querySelector('#popupTow');
export const newName = document.querySelector('#name');
export const newJob = document.querySelector('#job');
export const nameText = document.querySelector('.profile__title');
export const jobText = document.querySelector('.profile__subtitle');
export const openTwoButton = document.querySelector('.profile__add');
export const closeButtonTwo = document.querySelector('#close-two')
export const imagePopup = document.querySelector('#image-viewer');
export const imageElement = document.querySelector('.popup__image');
export const imageTitle = document.querySelector('.popup__image-title');
export const closeImageViewerButton = document.querySelector('#close-image');
export const editProfileForm = document.querySelector('#popup__form');
export const addCardForm = document.querySelector('#form-addCard');
export const title = document.querySelector('#title');
export const link = document.querySelector('#link');

  
export  const openOnePopup = () => {
    closeButton.addEventListener('click', closePopup, { once: true });
    popup.classList.add("popup__opened");
    newName.value = "";
    newJob.value = "";
    closeClickOutside(popup)
    closeOnEscapeKey(popup)
}
  
export  const openTwoPopup = () => {
    closeButtonTwo.addEventListener('click', closePopup, { once: true });    
    popupTwo.classList.add("popup__opened");
    document.querySelector('#title').value = ''; 
    document.querySelector('#link').value = '';
    closeClickOutside(popupTwo); 
    closeOnEscapeKey(popupTwo)
};
  
export  const closeClickOutside = (popup) => {
    popup.addEventListener('click', function(evt){
        if (evt.target.classList.contains("popup__opened")){
            closePopup()
        }
    })
}  

export  const closeOnEscapeKey = () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup()
        }
    })
}

export  function closePopup(){
    popup.classList.remove("popup__opened");
    popupTwo.classList.remove("popup__opened");
    imagePopup.classList.remove("popup__opened");
};
    
export  function handleFormSubmit (e) {
    e.preventDefault();
    nameText.textContent = newName.value;
    jobText.textContent = newJob.value;
    closePopup()
};
  