// ============================================================================
// FORMULÁRIOS
// Arquivo: js/utils/formulario.js
// ============================================================================

// ================= SELECT =================

export function preencherSelect(

    select,

    dados,

    valueField,

    textField

) {

    if (!select) return;

    select.innerHTML = "";

    const option = document.createElement("option");

    option.value = "";

    option.textContent = "Selecione";

    select.appendChild(option);

    dados.forEach(item => {

        const option = document.createElement("option");

        option.value = item[valueField];

        option.textContent = item[textField];

        select.appendChild(option);

    });

}

// ================= DADOS =================

export function obterDadosFormulario(formulario) {

    const dados = {};

    const campos = new FormData(formulario);

    campos.forEach((valor, chave) => {

        dados[chave] = valor.trim();

    });

    return dados;

}

// ================= PREENCHER =================

export function preencherFormulario(

    formulario,

    dados

) {

    Object.keys(dados).forEach(campo => {

        if (

            formulario[campo]

        ) {

            formulario[campo].value =

                dados[campo];

        }

    });

}

// ================= LIMPAR =================

export function limparFormulario(formulario) {

    formulario.reset();

}

// ================= HABILITAR =================

export function habilitarFormulario(

    formulario,

    habilitado = true

) {

    formulario

        .querySelectorAll(

            "input, select, textarea, button"

        )

        .forEach(campo => {

            campo.disabled = !habilitado;

        });

}
