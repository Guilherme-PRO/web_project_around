export default class Card{
    constructor({card, cardSelector, openImagePopup}){
        this._card = card
        this._cardSelector = cardSelector
        this._openImagePopup = openImagePopup
        
    }

    _getTemplate(){
        const templateContent = document.querySelector(this._cardSelector).content.querySelector('.gallery__element').cloneNode(true);
        return templateContent;
    }

    _setListListeners(){
        this._element.querySelector('.gallery__like').addEventListener('click', (event) => {
            event.target.classList.toggle('gallery__like-click');
        });
        this._element.querySelector('.gallery__lixeira').addEventListener('click', (event) => {
            const cardDelety = event.target.parentElement;
            cardDelety.remove();
        });  
        this._element.querySelector('.gallery__img').addEventListener('click', () => {
            this._openImageViewer(this._card.name, this._card.link);
        });
    }
    
    _openImageViewer(title, link) {
        this._openImagePopup(title, link)
    }
    
    generateCard(){
        this._element = this._getTemplate();
        this._element.querySelector('.gallery__title').textContent = this._card.name;
        this._element.querySelector('.gallery__img').setAttribute('src', this._card.link);
        this._element.querySelector('.gallery__img').setAttribute('alt', this._card.name);
        this._setListListeners();
        return this._element;
    }
    
}