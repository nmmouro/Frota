// ============================================================================
// CARDS
// Painel Frota
// Arquivo: js/ui/cards.js
// ============================================================================

// ============================================================================
// RENDER
// ============================================================================

export function renderCards(

    container,

    cards = []

) {

    if (!container) return;

    limparCards(container);

    cards.forEach(card => {

        container.appendChild(

            criarCard(card)

        );

    });

}

// ============================================================================
// CRIAR CARD
// ============================================================================

function criarCard({

    titulo = "",

    valor = "",

    icone = "",

    classe = "",

    subtitulo = ""

}) {

    const article =

        document.createElement("article");

    article.className =

        `card ${classe}`.trim();

    article.innerHTML = `

        <div class="card-header">

            <span class="card-icon">

                ${icone}

            </span>

            <span class="card-title">

                ${titulo}

            </span>

        </div>

        <div class="card-body">

            <strong class="card-value">

                ${valor}

            </strong>

        </div>

        <div class="card-footer">

            ${subtitulo}

        </div>

    `;

    return article;

}

// ============================================================================
// LIMPAR
// ============================================================================

export function limparCards(container) {

    container.innerHTML = "";

}

// ============================================================================
// ATUALIZAR
// ============================================================================

export function atualizarCards(

    container,

    cards

) {

    renderCards(

        container,

        cards

    );

}
