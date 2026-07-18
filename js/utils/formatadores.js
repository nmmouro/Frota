// ============================================================================
// FORMATADORES
// Arquivo: js/utils/formatadores.js
// ============================================================================

// ================= TEXTO =================

export function texto(valor = "") {

    return String(valor).trim();

}

// ================= MAIÚSCULAS =================

export function maiusculas(valor = "") {

    return texto(valor).toUpperCase();

}

// ================= TÍTULO =================

export function titulo(valor = "") {

    return texto(valor)

        .toLowerCase()

        .replace(/\b\w/g, letra => letra.toUpperCase());

}

// ================= CPF =================

export function cpf(valor = "") {

    const numero = valor.replace(/\D/g, "");

    if (numero.length !== 11) return valor;

    return numero.replace(

        /(\d{3})(\d{3})(\d{3})(\d{2})/,

        "$1.$2.$3-$4"

    );

}

// ================= TELEFONE =================

export function telefone(valor = "") {

    const numero = valor.replace(/\D/g, "");

    if (numero.length === 11) {

        return numero.replace(

            /(\d{2})(\d{5})(\d{4})/,

            "($1) $2-$3"

        );

    }

    if (numero.length === 10) {

        return numero.replace(

            /(\d{2})(\d{4})(\d{4})/,

            "($1) $2-$3"

        );

    }

    return valor;

}

// ================= PLACA =================

export function placa(valor = "") {

    return texto(valor).toUpperCase();

}

// ================= MOEDA =================

export function moeda(valor = 0) {

    return Number(valor).toLocaleString(

        "pt-BR",

        {

            style: "currency",

            currency: "BRL"

        }

    );

}

// ================= NÚMERO =================

export function numero(valor = 0, casas = 0) {

    return Number(valor).toLocaleString(

        "pt-BR",

        {

            minimumFractionDigits: casas,

            maximumFractionDigits: casas

        }

    );

}
