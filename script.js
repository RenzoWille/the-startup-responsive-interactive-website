// zorg ervoor dat js de zoekbalk kan vinden 

let mijnZoekbalk = document.querySelector('#search-input');
let vacatureBlok = document.querySelectorAll('.vacatureblok');

// voeg een event toe 

mijnZoekbalk.addEventListener('input', searchTable);

// voeg een functie toe

function searchTable() {
    vacatureBlok.forEach((row) => {
        let vacature_data = row.textContent.toLocaleLowerCase(),
            search_data = mijnZoekbalk.value.toLocaleLowerCase();

        row.classList.toggle('hide', vacature_data.indexOf(search_data) < 0);
    });
}

//zorg dat de dom de selector kan vinden 

let mijnForm = document.querySelector('form');
let mijnLabel = document.querySelector('label');

//voeg een event en functie toe 

mijnLabel.addEventListener('click', function() {
    mijnForm.classList.toggle('active');
});
