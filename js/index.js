import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo({
  name: ".profile__title",
  about: ".profile__subtitle",
});

const profileForm = new PopupWithForm({
  selector: "#popupOne",
  formSelector: ".popup__form",
  callback: (value) => userInfo.setUserInfo(value.name, value.about),
  buttonSelector: ".profile__edit-avatar",
});
profileForm.setEventListeners();

const addCardForm = new PopupWithForm({
  selector: "#popupTwo",
  formSelector: ".popup__form",
  callback: (value) => renderCard(value),
  buttonSelector: ".profile__add",
});
addCardForm.setEventListeners();

const popupWithImage = new PopupWithImage({
  selector: "#image-viewer",
  imagen: ".popup__image",
  caption: ".popup__image-title",
});
popupWithImage.setEventListeners();

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".gallery__elements"
);
section.renderItens();

function renderCard(card) {
  const newCard = new Card({
    card: card,
    cardSelector: "#template",
    openImagePopup: (title, link) => popupWithImage.open({src:link , caption:title }),
    handleLikeClick: ".gallery__like",
    handleDeleteClick: ".gallery__delete",
  }).generateCard();
  section.addItem(newCard);
}


const formUser = new FormValidator({
  config: {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible",
  },
  formSelector: "#popup__form",
});
formUser.enableValidation();

const formCard = new FormValidator({
  config: {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible",
  },
  formSelector: "#form-addCard",
});
formCard.enableValidation();
