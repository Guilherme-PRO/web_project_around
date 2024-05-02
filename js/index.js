
const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.edit__avatar_edit');
const overlay = document.querySelector('.popup__overlay');
const popup = document.querySelector('.popup');
closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});
openButton.addEventListener('click', function() {
    popup.style.display = 'flex'; 
});


const salve = document.querySelector('.popup__form_bnt-submit');
popup.style.display = 'none';
salve.addEventListener('click', function(){
    const newName = document.querySelector('.popup__form_input-name').value;
    const newJob = document.querySelector('.popup__form_input-job').value;
    const nameText = document.querySelectorAll('.edit__avatar_title');
    const jobText = document.querySelectorAll('.edit__avater_subtitle');
    
    function atualizarInformacoes() {
        for (let i = 0; i < nameText.length; i++) {
            nameText[i].textContent = newName;
        }
    
        for (let i = 0; i < jobText.length; i++) {
            jobText[i].textContent = newJob;
        }
    }
    
   
    
    atualizarInformacoes();
});