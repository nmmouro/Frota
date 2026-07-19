import { createCard }

    from "../components/card.js";

export function renderCards(

    container,

    cards

){

    container.innerHTML = "";

    cards.forEach(card=>{

        container.appendChild(

            createCard(card)

        );

    });

}
