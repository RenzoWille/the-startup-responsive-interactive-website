# Titel

<strong>Drukwerkdeal Carreerpage</strong>

Voor dit project is de opdracht gekregen vanuit Drukwerkdeal om een nieuwe vacaturepagina te ontwerpen en te bouwen, zo kan het bedrijf eventueel imspiratie op doen en wordt er met een frisse blik gekeken naar de opdracht.

Het probleem was dat de huidige vacature pagina erg verouderd was en niet meer voldeed aan de huidige branding van Drukwerkdeal, er moet een nieuwe, frisse pagina komen om bezoekers te motiveren om te solliciteren. Er is hierbij veel gebruik gemaakt van witruimte, branding en een 'kalm' design om de bezoeker rust te laten ervaren.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
### Hoe ziet het project eruit?

#### Mobiele versie
![IMG_6589](https://github.com/user-attachments/assets/5507f9a6-10b3-4201-b625-e7af5f751b89)
![IMG_6590](https://github.com/user-attachments/assets/5c795257-a246-4856-81e2-ac01c275a83a)
![IMG_6591](https://github.com/user-attachments/assets/ca0a012c-5b08-49f8-8bcb-d9bed4efd4ee)
![IMG_6592](https://github.com/user-attachments/assets/62d84632-e6ce-4016-999f-8ebfe526f9ed)

#### Desktop versie
<img width="1440" alt="Scherm­afbeelding 2025-01-22 om 18 54 53" src="https://github.com/user-attachments/assets/df39c93d-7e83-4576-8e8c-62728099f520" />
<img width="1440" alt="Scherm­afbeelding 2025-01-22 om 18 55 26" src="https://github.com/user-attachments/assets/4d6be674-ed66-4889-8ded-b8c146719ad5" />
<img width="1440" alt="Scherm­afbeelding 2025-01-22 om 18 55 41" src="https://github.com/user-attachments/assets/2926a3d5-d1ac-4bc2-907b-f144f7ae3799" />
<img width="1440" alt="Scherm­afbeelding 2025-01-22 om 18 55 49" src="https://github.com/user-attachments/assets/ee801025-d03a-4eb8-a2d6-9d2eee0d4499" />


#### Poster Visual
<img width="677" alt="Scherm­afbeelding 2025-01-22 om 18 57 16" src="https://github.com/user-attachments/assets/65f379a0-8de1-41d2-8243-d6c65d5a9eb6" />

### Responsive
Tijdens het bouwen van de pagina is het mobile-first principe aangehouden. Mobile First is een design strategie. Als je ontwerpt voor een klein scherm, dan moet je goed nadenken over welke content belangrijk is en in beeld moet komen te staan. 

Hiervoor is er gebruik gemaakt van breakpoints, zodat het design op de juiste momenten 'breekt' en gebruiksvriendelijk blijft. 

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/3ed1458506b4157f34037dfc846c127f79ef1d8e/styles.css#L73-L81
Hier is er voor gezorgd dat de video een bepaalde aspect-ratio behoudt wanneer de viewport groter wordt dan mobiele schermen.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/3ed1458506b4157f34037dfc846c127f79ef1d8e/styles.css#L242-L259
Hier is er voor gezorgd dat de vacatureblokken breken bij meer dan 850px om zo het scherm alsnog te vullen en de positionering van de blokken te veranderen.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/3ed1458506b4157f34037dfc846c127f79ef1d8e/styles.css#L283-L289
Hier wordt er voor gezorgd dat de vacatureblokken groter worden naarmate de grootte van de viewport veranderd.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/3ed1458506b4157f34037dfc846c127f79ef1d8e/styles.css#L335-L355
Hier wordt er voor gezorgd dat de afbeeldingen zichtbaar worden op schermen met een grote viewport en niet zichtbaar zijn op kleinere viewports.

### Ontwerpkeuzes
Voor deze sprint is er vanuit school ook de opdracht gegeven een micro-interactie te bouwen in JavaScript, ik heb er voor gekozen om een zoekbutton te animeren die met een click event veranderd in een zoekbalk. Dit is mijn JavaScript:
https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/script.js#L3-L10
Ik heb hier de keuze gemaakt om met de class="active" er voor te zorgen dat de zoekbalk zichtbaar wordt na een klik. Na dat er op de zoekknop wordt geklikt, verschijnt de zoekbalk, en kan er zo gezocht worden naar een vacature. 

De feedforward zorgt er in dit geval voor dat gebruikers weten dat er gezocht kan worden als er op de knop wordt geklikt, en de feedback zorgt ervoor dat de gebruiker kan zoeken naar een vacature en dat deze in beeld komt.

#### Link naar Github Page
(https://renzowille.github.io/the-startup-responsive-interactive-website/)

## Kenmerken

### HTML
In de HTML is er gebruik gemaakt van de code conventies van de HVA, ook heb ik eigen code conventies toegevoegd om de HTML zo goed mogelijk leesbaar te maken. Zo is er gebruik gemaakt van de volgende standaarden:

#### Ademruimte en inspringen
Om er voor te zorgen dat de HTML goed te lezen en te begrijpen is, heb ik gebruik gemaakt van ademruimte en inspringen. Om genoeg ademruimte te gebruiken tussen je code, is deze overzichtelijker en kunnen anderen beter begrijpen wat er staat.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/index.html#L108-L123
Door genoeg spatie te gebruiken in de HTML wordt deze beter leesbaar en beter te begrijpen.

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

#### Volgorde en nesten van CSS selectors
Om er voor te zorgen dat de CSS goed te begrijpen en overzichtelijk blijft, heb ik gebruik gemaakt van een goede, logische volgorde op basis van mijn HTML en het nesten van CSS selectors die bij elkaar horen. Door te zorgen dat de CSS op ongeveer dezelfde volgorde wordt geschreven als de HTML, zorg je ervoor dat je de code weer sneller terug kan vinden en vermijd je onnodige tijd met het zoeken naar je code.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/styles.css#L117-L169
Hier zie je dat ik alle elementen binnen het form element heb genest om er zo voor te zorgen dat ik en anderen weten dat al deze code bij elkaar hoort. Zo blijft het overzichtelijk en vermijd ik chaos in mijn code.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/styles.css#L261-L290
Hier precies hetzelfde idee. Nesten = overzichtelijker en duidelijker voor de programmeur en de lezer!

#### Nesten van media queries
Bij het nesten van media queries zorg je er eigenlijk, net als het nesten van je CSS, ervoor dat je als programmeur goed weet welke media queries bij welke CSS selectors horen. Zo schrijf je goede, duidelijke en overzichtelijke code.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/styles.css#L304-L311
Hier zie je dat ik mijn media query heb genest in een geneste CSS selector, om zo er voor te zorgen dat ik weet dat deze media query bij de selector hoort.

#### Naamgeving
Voor de naamgeving van classes en id's in mijn HTML heb ik ervoor gezorgd de bepaalde elementen een naam te geven die zo duidelijk mogelijk is en zo goed mogelijk bij het desbetreffende element past. In mijn document heb ik alleen maar gebruik gemaakt van kebabcasing, om de consistentie te bewaren en onduidelijkheden en typfouten te vermijden.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/f49c541f459d4a3fedb3cfafaa51d98c0355ab47/index.html#L23-L28
Zo heb ik hier de class name "video-container" gegeven aan het article waarin ik een video heb beschreven. Zo is het voor mij duidelijk als ik deze wil aanspreken in mijn CSS waar ik nou precies mijn code voor schrijf.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/a2b88f71c735a0b4031347315c0252e3015b4b4f/index.html#L115-L121
Hier heb ik het zelfde gedaan, een duidelijke naam gegeven aan dit article zodat ik later precies weet wat ik aan het stijlen ben in mijn CSS.

https://github.com/RenzoWille/the-startup-responsive-interactive-website/blob/a2b88f71c735a0b4031347315c0252e3015b4b4f/script.js#L4
Ook in mijn JavaScript heb ik ervoor gezorgd dat ik duidelijke, simpele namen heb gegeven aan de elementen die ik later weer wil aanspreken.

## Bronnen
https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/mobile-first.md

https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/refactoring-code-conventions.md

https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#geef-je-html-ademruimte

https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#schrijf-je-css-selectors-in-dezelfde-volgorde-als-de-html

https://github.com/fdnd-task/the-client-website/blob/main/docs/code-conventies.md#nest-je-media-queries

https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/interaction-design.md


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


