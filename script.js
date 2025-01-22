// Selecteer de benodigde elementen
let mijnForm = document.querySelector('form');
let mijnLabel = document.querySelector('label');
const searchInput = document.querySelector('#search-input'); // Zoekbalk
const vacatures = document.querySelectorAll('.vacatureblok'); // Alle vacatureblokken

// Toggle de zoekbalk actief/inactief maken
mijnLabel.addEventListener('click', function () {
    mijnForm.classList.toggle('active');
});

// Zoekfunctie: filter vacatures op basis van h4-inhoud terwijl de gebruiker typt
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Haal de zoekterm op en zet deze in kleine letters

    // Itereer door alle vacatures en filter op basis van h4-inhoud
    vacatures.forEach(vacature => {
        const h4Element = vacature.querySelector('h4'); // Zoek het h4-element binnen het vacatureblok
        if (h4Element) {
            const h4Text = h4Element.innerText.toLowerCase(); // Haal de tekst van het h4-element op
            if (h4Text.includes(searchTerm)) {
                vacature.style.display = ''; // Laat zien als de zoekterm overeenkomt
            } else {
                vacature.style.display = 'none'; // Verberg anders
            }
        }
    });
});
