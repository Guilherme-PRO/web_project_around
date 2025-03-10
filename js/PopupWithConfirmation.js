import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor({ selector, formSelector}) {
    super({ selector }); 
    this._formSelector = formSelector;
    this._form = document.querySelector(formSelector)
    this._submitAction = null
  }

  setSubmitAction(action) {
    this._submitAction = action;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitAction()
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
  
}
