// ============================================================================
// CARDS
// Arquivo: js/ui/cards.js
// ============================================================================

// ================= RENDER =================

export function renderCards(

    container,

    dados,

    template

) {

    if (!container) return;

    container.innerHTML = "";

    if (!dados || dados.length === 0) {

        container.innerHTML =

            "<p>Nenhum registro.</p>";

        return;

    }

    dados.forEach(item => {

        const card = document.createElement("div");

        card.className = "card-item";

        card.innerHTML = template(item);

        container.appendChild(card);

    });

}

// ================= LIMPAR =================

export function limparCards(container) {

    if (!container) return;

    container.innerHTML = "";

}
