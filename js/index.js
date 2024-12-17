import Card from "./Card.js";
import FormValidator from "./FormValidator.js"
import { 
  link,
  openButton,
  openTwoButton,
  imagePopup,
  imageElement,
  imageTitle,
  closeImageViewerButton,
  editProfileForm,
  addCardForm,
  title,
  openOnePopup,
  openTwoPopup,
  closeClickOutside,
  closeOnEscapeKey,
  closePopup,
  handleFormSubmit
} from "./utils.js";

editProfileForm.addEventListener("submit", handleFormSubmit);
openTwoButton.addEventListener('click', openTwoPopup)
openButton.addEventListener('click', openOnePopup);

const formUser = new FormValidator({
  config : {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible"
  }, 
  formSelector: "#popup__form"
})
formUser.enableValidation()

const formCard = new FormValidator({
  config : {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible"
  }, 
  formSelector: "#form-addCard"
})
formCard.enableValidation()

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

const openImageViewer = (title, link) => {
  closeImageViewerButton.addEventListener('click', closePopup, { once: true });    
  imagePopup.classList.add('popup__opened')
  imageTitle.textContent = title;
  imageElement.src = link;
  closeClickOutside(imagePopup); 
  closeOnEscapeKey(imagePopup)
};

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