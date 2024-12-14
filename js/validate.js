/*
function enableValidation(element){
const formElement = document.forms[element.formSelector];
const inputElements = Array.from(formElement.querySelectorAll(element.inputSelector));
const button = formElement.querySelector(element.submitButtonSelector);


const checkInputValidity = (input) => {
  if(!input.validity.valid){
    showError(input, input.validationMessage);
  } else {
    hideError(input);
  }
};

inputElements.forEach((inputElement) => {
  inputElement.addEventListener("input", function(){
    checkInputValidity(inputElement);
    validationButton(inputElements)
  });
});

const showError = (inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(element.inputErrorClass); 
  formError.textContent = errorMessage; 
  formError.classList.add(element.errorClass); 
};

const hideError = (inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(element.inputErrorClass);
  formError.textContent = ""; 
  formError.classList.remove(element.errorClass);
};

const validationButton = (inputs) => {
  const totalInputs = inputs.length
  if(inputs.filter((i) => i.validity.valid).length === totalInputs ){
    button.removeAttribute('disabled');
    button.classList.remove(element.inactiveButtonClass)
  } else {
    button.setAttribute('disabled', true);
    button.classList.add(element.inactiveButtonClass)
  }
}

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault()
  });
};

enableValidation({
  formSelector: "formName",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible"
});
enableValidation({
  formSelector: "formAdd",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible"
});
*/