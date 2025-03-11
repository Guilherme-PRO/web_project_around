import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor({ selector, imagen, caption }) {
    super({ selector });
    this._imagen = this._popup.querySelector(imagen);
    this._caption = this._popup.querySelector(caption);
  }

  open({ src, caption }) {
    this._imagen.src = src;
    this._imagen.alt = caption;
    this._caption.textContent = caption;
    super.open();
  }
}
