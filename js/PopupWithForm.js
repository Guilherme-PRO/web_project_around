import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ selector, callback, formSelector, buttonSelector }) {
    super({ selector });
    this._callback = callback;
    this._form = document.querySelector(selector);
    this._formSelector = formSelector;
    this._button = document.querySelector(buttonSelector);
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__input");

    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._callback(values);
      this.close();
    });
    if (this._button) {
      this._button.addEventListener("click", () => {
        super.open();
      });
    }
  }

  close() {
    super.close();
    this._form.querySelector(this._formSelector).reset();
  }
}
