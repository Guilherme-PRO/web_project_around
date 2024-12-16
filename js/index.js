import Card from "./Card.js";
import FormValidator from "./FormValidator.js"

const form1 = new FormValidator({
  config : {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible"
  }, 
  formSelector: "#popup__form"
})
form1.enableValidation()

const form2 = new FormValidator({
  config : {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible"
  }, 
  formSelector: "#form-addCard"
})
form2.enableValidation()


const closeButton = document.querySelector('#close-one');
const openButton = document.querySelector('.profile__edit-avatar');
const popup = document.querySelector('#popupOne');
const popupTwo = document.querySelector('#popupTow');
const newName = document.querySelector('#name');
const newJob = document.querySelector('#job');
const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');
const openTwoButton = document.querySelector('.profile__add');
const closeButtonTwo = document.querySelector('#close-two')
const imagePopup = document.querySelector('#image-viewer');
const imageElement = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');
const closeImageViewerButton = document.querySelector('#close-image');
const editProfileForm = document.querySelector('#popup__form');
const addCardForm = document.querySelector('#form-addCard');
const title = document.querySelector('#title');
const link = document.querySelector('#link');

const openImageViewer = (title, link) => {
  closeImageViewerButton.addEventListener('click', closePopup, { once: true });    
  imagePopup.classList.add('popup__opened')
  imageTitle.textContent = title;
  imageElement.src = link;
  closeClickOutside(imagePopup); 
  closeOnEscapeKey(imagePopup)
};

const openOnePopup = () => {
  closeButton.addEventListener('click', closePopup, { once: true });
  popup.classList.add("popup__opened");
  newName.value = "";
  newJob.value = "";
  closeClickOutside(popup)
  closeOnEscapeKey(popup)
};
openButton.addEventListener('click', openOnePopup);

const openTwoPopup = () => {
  closeButtonTwo.addEventListener('click', closePopup, { once: true });    
  popupTwo.classList.add("popup__opened");
  document.querySelector('#title').value = ''; 
  document.querySelector('#link').value = '';
  closeClickOutside(popupTwo); 
  closeOnEscapeKey(popupTwo)
};
openTwoButton.addEventListener('click', openTwoPopup)

const closeClickOutside = (popup) => {
  popup.addEventListener('click', function(evt){
    if (evt.target.classList.contains("popup__opened")){
      closePopup()
    }
  })
}

const closeOnEscapeKey = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePopup()
    }
  })
}

function closePopup(){
  popup.classList.remove("popup__opened");
  popupTwo.classList.remove("popup__opened");
  imagePopup.classList.remove("popup__opened");
};


function handleFormSubmit (e) {
  e.preventDefault();
  nameText.textContent = newName.value;
  jobText.textContent = newJob.value;
  closePopup()
};
editProfileForm.addEventListener("submit", handleFormSubmit);

const list = document.querySelector(".gallery__elements");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
];

for ( const item of initialCards) {
    list.append(new Card({
      card:item,
      cardSelector:"#template",
      openImagePopup: (title, link) => openImageViewer(title, link)
    }).generateCard())
};

function addElement() {
  const newCard = new Card({card:{name:title.value, link:link.value}, cardSelector:"#template", openImagePopup: (title, link) => openImageViewer(title, link)}).generateCard();
  list.prepend(newCard);
  title.value = '';
  link.value = '';
  closePopup()
}

addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addElement();
});