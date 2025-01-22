//zorg dat de dom de selector kan vinden 

let mijnForm = document.querySelector('form');
let mijnLabel = document.querySelector('label');

//voeg een event en functie toe 

mijnLabel.addEventListener('click', function() {
    mijnForm.classList.toggle('active');
});