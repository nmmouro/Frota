// ============================================================================
// TABELAS
// Arquivo: js/ui/table.js
// ============================================================================

// ================= RENDER =================

export function renderTable(

    tbody,

    dados,

    colunas = null

) {

    if (!tbody) return;

    tbody.innerHTML = "";

    if (!dados || dados.length === 0) {

        renderEmpty(tbody);

        return;

    }

    const campos = colunas ?? Object.keys(dados[0]);

    dados.forEach(item => {

        const tr = document.createElement("tr");

        campos.forEach(campo => {

            const td = document.createElement("td");

            td.textContent = item[campo] ?? "";

            tr.appendChild(td);

        });

        tbody.appendChild(tr);

    });

}

// ================= LIMPAR =================

export function limparTabela(tbody) {

    if (!tbody) return;

    tbody.innerHTML = "";

}

// ================= SEM DADOS =================

function renderEmpty(tbody) {

    const tr = document.createElement("tr");

    const td = document.createElement("td");

    td.colSpan = 20;

    td.className = "empty";

    td.textContent = "Nenhum registro encontrado.";

    tr.appendChild(td);

    tbody.appendChild(tr);

}
