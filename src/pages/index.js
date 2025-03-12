import Card from "../js/Card.js";
import FormValidator from "../js/FormValidator.js";
import Section from "../js/Section.js";
import PopupWithImage from "../js/PopupWithImage.js";
import PopupWithForm from "../js/PopupWithForm.js";
import UserInfo from "../js/UserInfo.js";
import Api from "../js/APIs.js";
import PopupWithConfirmation from "../js/PopupWithConfirmation.js";

// ----------------------------API------------------------------------//

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "3c69adb7-c533-4693-b25b-04601676ce36",
    "Content-Type": "application/json"
  }
})

//----------------------------GETUser---------------------------------//

const userInfo = new UserInfo({
  name: ".profile__title",
  about: ".profile__subtitle",
});
api.getUser().then(res => {
  if(!res.ok){
    return Promise.reject(`Erro: ${res.status}`);
  }
  return res.json();
}).then((res) =>{
  userInfo.setUserInfo(res.name, res.about)
  console.log(res);
}).catch((err) =>{
  console.log(`[GET] - /user -${err}`)
});

const avata = new UserInfo({
  avatar: ".profile__photo-avatar"
})
api.getPhotoPerfil().then(res => {
  if(!res.ok){
    return Promise.reject(`Erro: ${res.status}`);
  }
  return res.json();
}).then((data) =>{
  avata.setAvatar(data.avatar);
}).catch((err) =>{
  console.log(`[GET] - /users/me/avatar ${err}`)
});
//----------------------------PhotoPerfil--------------------------------------//

const photoPerfil = new PopupWithForm({
  selector: "#photoPerfil",
  formSelector: ".popup__form",
  callback: (value) => {
    console.log(value)
    const avatar = value.link; 
    console.log("Nova imagem enviada:", avatar); 
    document.querySelector("#submit-pefil").textContent = "Salvando ...";
    api.photoPerf({avatar}) 
      .then(res => {
        if (!res.ok) {
          return Promise.reject(`Erro: ${res.status}`);
        }
        return res.json();
      })
      .then(updatedUser => {
        document.querySelector(".profile__photo-avatar").src = updatedUser.avatar;
        console.log("Foto do perfil atualizada com sucesso!", updatedUser);
      })
      .catch(err => {
        console.error(`[PATCH] - /users/me/avatar ${err}`);
      })
      .finally(()=>{
        document.querySelector("#submit-pefil").textContent = "Sim"
        photoPerfil.close();
      })
  },
  buttonSelector: ".profile__photo-perfil"
});

photoPerfil.setEventListeners();
//----------------------------USUARIO-INFOR------------------------------------//


const profileForm = new PopupWithForm({
  selector: "#popupOne",
  formSelector: ".popup__form",
  callback: (value) => {
    document.querySelector("#savebutton").textContent = "Salvando ..."
    api.updateUser({"name": value.name, "about": value.about}).then(res => {
      if(!res.ok){
        return Promise.reject(`Erro: ${res.status}`);
      }
      return res.json();
    }).then((updateUser) => {
      userInfo.setUserInfo(updateUser.name, updateUser.about)
      console.log(updateUser);
    }).catch((err) => {
      console.log(`[PATCH] - /users ${err}`)
    })
    .finally(()=>{
      document.querySelector("#savebutton").textContent = "Salvar"
      profileForm.close();
    })
  },
  buttonSelector: ".profile__edit-avatar",
});
profileForm.setEventListeners();

//-----------------CriaCard----PUST-------------------------------//

const addCardForm = new PopupWithForm({
  selector: "#popupTwo",
  formSelector: ".popup__form",
  callback: (value) =>{ 
    document.querySelector("#create").textContent = "Criando ..."
    api.creatCard({
      "isLiked": false,
      "name": value.name,
      "link": value.link,
      "createdAt": new Date(),
    }).then(res =>{
      if(!res.ok){
        return Promise.reject(`Erro: ${res.status}`);
      }
      return res.json();
    }).then((card) =>{
      renderCard(card);
      console.log(card);
    }).catch((err) =>{
      console.log(`[POST] - /card -${err}`)
    })
    .finally(()=>{
      document.querySelector("#create").textContent = "Criar"
      addCardForm.close();
    })
  },
  buttonSelector: ".profile__add",
});
addCardForm.setEventListeners();

const popupWithImage = new PopupWithImage({
  selector: "#image-viewer",
  imagen: ".popup__image",
  caption: ".popup__image-title",
});
popupWithImage.setEventListeners();

//-------------------API-DELETYCARD------------------------------//

function deletyCard(card){
  console.log(card)
  api.deleteCard(card._id).then(res => {
    if(!res.ok){
      return Promise.reject(`Erro: ${res.status}`)
    }
  }).catch(err => {
    console.log(`[DELETE] - /card - ${card.id} -${err}`)
  })
} 

//-------------------ConfirmationDelety----------------------------//

const confirmationDelety = new PopupWithConfirmation({
  selector: "#esclude",
  formSelector: "#form-esclude"
});
confirmationDelety.setEventListeners();

//---------------------likeCard--------------------------------//

function toggleLike(card, cardElement) {
  api.toLike(card._id, card.isLiked).then(res => {
    console.log(res)
    if (!res.ok) {
      return Promise.reject(`Erro: ${res.status}`)
    }
    return res.json();
  }) .then(updatedCard => {
    card.isLiked = updatedCard.isLiked;
    console.log(cardElement)
    cardElement.classList.toggle("gallery__like-click")
    card.isLiked;
  })
  .catch(err => {
    console.log(`[DELETE/PUT] - /card - ${card.id} -${err}`)
  });
}

//-----------------GETCards--------------------------------//

api.getCards().then(res =>{
  if(!res.ok){
    return Promise.reject(res.status);
  }
  return res.json();
}).then((cards) =>{
  section = new Section(
    {
      items: cards,
      renderer: renderCard
    },
    ".gallery__elements"
    );
    section.renderItens();
    console.log(cards);
  }).catch((err) =>{
    console.log(err)
  })

//---------------------------NewCard-----------------------------//

let section
function renderCard(card) {
  const newCard = new Card({
    card: card,
    cardSelector: "#template",
    openImagePopup: (title, link) => popupWithImage.open({src:link , caption:title }),
    handleLikeClick: (card, cardElement) => {
      toggleLike(card, cardElement);
    },
    handleDeleteClick: (card) => {
      confirmationDelety.open()
      confirmationDelety.setSubmitAction(() => {
        deletyCard(card)
        newCard.remove()
        confirmationDelety.close();
      });
    }
  }).generateCard();
  section.addItem(newCard);
}


  
  //-----------------validaçãoINPUTs--------------------------------//
  
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

const formperfil = new FormValidator({
  config: {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_visible",
  },
  formSelector: "#form-photoPerfil",
})
formperfil.enableValidation();