// ============================================================================
// TABLE
// Painel Frota
// Arquivo: js/ui/table.js
// ============================================================================

// ============================================================================
// RENDER
// ============================================================================

export function renderTable(

    tbody,

    dados = [],

    {

        colunas = [],

        acoes = []

    } = {}

){

    if(!tbody) return;

    limparTabela(tbody);

    if(dados.length === 0){

        return renderEmpty(

            tbody,

            colunas.length +

            (acoes.length ? 1 : 0)

        );

    }

    dados.forEach(registro=>{

        const tr = document.createElement("tr");

        //------------------------------------------------------
        // Colunas
        //------------------------------------------------------

        colunas.forEach(coluna=>{

            const td = document.createElement("td");

            td.textContent =

                registro[coluna] ?? "";

            tr.appendChild(td);

        });

        //------------------------------------------------------
        // Botões
        //------------------------------------------------------

        if(acoes.length){

            tr.appendChild(

                criarColunaAcoes(

                    registro,

                    acoes

                )

            );

        }

        tbody.appendChild(tr);

    });

}

// ============================================================================
// COLUNA AÇÕES
// ============================================================================

function criarColunaAcoes(

    registro,

    acoes

){

    const td = document.createElement("td");

    td.className = "acoes";

    acoes.forEach(acao=>{

        const botao =

            document.createElement("button");

        botao.type = "button";

        botao.className =

            acao.className || "";

        botao.textContent =

            acao.label;

        botao.addEventListener(

            "click",

            ()=>acao.onClick(registro)

        );

        td.appendChild(botao);

    });

    return td;

}

// ============================================================================
// LIMPAR
// ============================================================================

export function limparTabela(tbody){

    tbody.innerHTML = "";

}

// ============================================================================
// SEM DADOS
// ============================================================================

export function renderEmpty(

    tbody,

    colunas = 1

){

    const tr =

        document.createElement("tr");

    const td =

        document.createElement("td");

    td.colSpan = colunas;

    td.className = "empty";

    td.textContent =

        "Nenhum registro encontrado.";

    tr.appendChild(td);

    tbody.appendChild(tr);

}

// ============================================================================
// RECARREGAR
// ============================================================================

export function atualizarTabela(

    tbody,

    dados,

    options

){

    renderTable(

        tbody,

        dados,

        options

    );

}
