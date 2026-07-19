// ============================================================================
// TABLE UI
// Painel Frota
// Arquivo: js/ui/table.js
// ============================================================================

import {

    renderTable as renderComponentTable

} from "../components/table.js";

// ============================================================================
// RENDER
// ============================================================================

export function renderTable(

    container,

    columns,

    data,

    actions = []

) {

    renderComponentTable(

        container,

        {

            columns,

            data,

            actions

        }

    );

}

// ============================================================================
// LIMPAR
// ============================================================================

export function limparTabela(

    container

) {

    if (!container) return;

    container.innerHTML = "";

}

// ============================================================================
// ATUALIZAR
// ============================================================================

export function atualizarTabela(

    container,

    columns,

    data,

    actions = []

) {

    renderTable(

        container,

        columns,

        data,

        actions

    );

}
