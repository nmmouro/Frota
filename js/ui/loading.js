// ============================================================================
// LOADING
// Arquivo: js/ui/loading.js
// ============================================================================

// ================= ELEMENTO =================

const ID = "loading";

// ================= MOSTRAR =================

export function mostrarLoading(texto = "Carregando...") {

    let loading = document.getElementById(ID);

    if (!loading) {

        loading = document.createElement("div");

        loading.id = ID;

        loading.className = "loading-overlay";

        loading.innerHTML = `

            <div class="loading-box">

                <div class="loading-spinner"></div>

                <p id="loading-text"></p>

            </div>

        `;

        document.body.appendChild(loading);

    }

    loading.querySelector("#loading-text").textContent = texto;

    loading.style.display = "flex";

}

// ================= ESCONDER =================

export function esconderLoading() {

    const loading = document.getElementById(ID);

    if (!loading) return;

    loading.style.display = "none";

}
