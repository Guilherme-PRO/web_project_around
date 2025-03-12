export default class Card {
  constructor({
    card, cardSelector, openImagePopup, handleLikeClick, handleDeleteClick}) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._isLiked = card.isLiked
  }

  _likeIcon(){
    if (this._isLiked) {
      this._element.querySelector(".gallery__like").classList.add("gallery__like-click");
    } else {
      this._element.querySelector(".gallery__like").classList.remove("gallery__like-click")
    }
  }

  _getTemplate() {
    const templateContent = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);
    return templateContent;
  }

  _setListListeners() {
      this._element.querySelector(".gallery__like").addEventListener("click", (event) => {
        event.preventDefault();
        if (typeof this._handleLikeClick === "function") {
          this._handleLikeClick(this._card, this._element.querySelector(".gallery__like"))
        }
        
      });

    this._element
      .querySelector(".gallery__lixeira")
      .addEventListener("click", () => {
        if(typeof this._handleDeleteClick === "function"){
          this._handleDeleteClick(this._card, this._element)
        }
      });
      
    this._element
      .querySelector(".gallery__img")
      .addEventListener("click", () => {
        this._openImageViewer(this._card.name, this._card.link);
      });
  }

  deletcard(){
    const deletcard = this._element;
    deletcard.remove()
  }

  _openImageViewer(title, link) {
    this._openImagePopup(title, link);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".gallery__title").textContent =
      this._card.name;
    this._likeIcon();
    this._element
      .querySelector(".gallery__img")
      .setAttribute("src", this._card.link);
    this._element
      .querySelector(".gallery__img")
      .setAttribute("alt", this._card.name);
    this._setListListeners();
    return this._element;
  }
}
