 export default class FormValidator{
    constructor({config, formSelector}){
        this._config = config
        this._formSelector = formSelector
    }
    
    _getForm(){
        const formElement = document.querySelector(this._formSelector)
        return formElement;
    }
    
    _handleValidation(inputElement) {
        this._checkInputValidity(inputElement);
        this._validationButton(this._inputs)
    }
    
    _setListListeners(){
        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
            this._handleValidation(inputElement)}) 
        })
    }
    
    _checkInputValidity = (input) => {
        if(!input.validity.valid){
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    };
    
    _validationButton = (inputs) => {
        const button = this._form.querySelector(this._config.submitButtonSelector);
        const totalInputs = inputs.length
        if(inputs.filter((i) => i.validity.valid).length === totalInputs ){
            button.removeAttribute('disabled');
            button.classList.remove(this._config.inactiveButtonClass)
        } else {
            button.setAttribute('disabled', true);
            button.classList.add(this._config.inactiveButtonClass)
        }
    }
    
    _showError = (inputElement, errorMessage) => {
        const formError = this._form.querySelector(`.${inputElement.id}-error`); 
        inputElement.classList.add(this._config.inputErrorClass); 
        formError.textContent = errorMessage; 
        formError.classList.add(this._config.errorClass); 
    };
    
    _hideError = (inputElement) => {
        const formError = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        formError.textContent = ""; 
        formError.classList.remove(this._config.errorClass);
    };
    
    enableValidation(){
        this._form = this._getForm()
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this._setListListeners()
    }

}