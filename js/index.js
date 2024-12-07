
const closeButton = document.querySelector('#close-one');
const openButton = document.querySelector('.profile__edit-avatar');
const popup = document.querySelector('#popupOne');
const popupTwo = document.querySelector('#popupTow');
const newName = document.querySelector('#name');
const newJob = document.querySelector('#job');
const nameText = document.querySelector('.profile__title');
const jobText = document.querySelector('.profile__subtitle');
const salve = document.querySelector('#savebutton');
const openTwoButton = document.querySelector('.profile__add');
const closeButtonTwo = document.querySelector('#close-two')
const cria = document.querySelector('#create')
const imagePopup = document.querySelector('#image-viewer');
const imageElement = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__image-title');
const closeImageViewerButton = document.querySelector('#close-image');
const editProfileForm = document.querySelector('#popup__form');
const addCardForm = document.querySelector('#form-addCard');


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
  
function createCard(card) {
  const templateContent = document.querySelector('#template').content;
  const cardItem = templateContent.querySelector('.gallery__element').cloneNode(true); 
  cardItem.querySelector('.gallery__title').textContent = card.name;
  cardItem.querySelector('.gallery__img').setAttribute('src', card.link);
  cardItem.querySelector('.gallery__img').setAttribute('alt', card.name);
  cardItem.querySelector('.gallery__like').addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like-click');
  });
  cardItem.querySelector('.gallery__lixeira').addEventListener('click', function (event) {
    const cardDelety = event.target.parentElement
    cardDelety.remove();
  });  
  const openImageViewer = (title, link) => {
    closeImageViewerButton.addEventListener('click', closePopup, { once: true });    
    imagePopup.classList.add('popup__opened')
    imageTitle.textContent = title;
    imageElement.src = link;
    closeClickOutside(imagePopup); 
    closeOnEscapeKey(imagePopup)
  };
    cardItem.querySelector('.gallery__img').addEventListener('click', () => openImageViewer(card.name, card.link));
    return cardItem;
};

for ( const item of initialCards) {
    list.append(createCard(item))
};
  
function addElement() {
  const title = document.querySelector('#title');
  const link = document.querySelector('#link');
  const newCard = createCard({name:title.value, link : link.value})
  list.prepend(newCard);
  title.value = '';
  link.value = '';
  closePopup()
}

addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  addElement();
});