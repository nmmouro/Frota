// ============================================================================
// STATUS
// Painel Frota
// Arquivo: js/ui/status.js
// ============================================================================

// ============================================================================
// STATUS
// ============================================================================

const STATUS = {

    AGENDADO: {

        classe: "status-agendado",

        icone: "📅"

    },

    "EM ANDAMENTO": {

        classe: "status-andamento",

        icone: "🚗"

    },

    CONCLUÍDO: {

        classe: "status-concluido",

        icone: "✅"

    },

    CONCLUIDO: {

        classe: "status-concluido",

        icone: "✅"

    },

    CANCELADO: {

        classe: "status-cancelado",

        icone: "❌"

    },

    MANUTENÇÃO: {

        classe: "status-manutencao",

        icone: "🔧"

    },

    MANUTENCAO: {

        classe: "status-manutencao",

        icone: "🔧"

    },

    LIVRE: {

        classe: "status-livre",

        icone: "🟢"

    },

    OCUPADO: {

        classe: "status-ocupado",

        icone: "🔴"

    }

};

// ============================================================================
// NORMALIZA
// ============================================================================

function normalizar(status = "") {

    return status

        .toString()

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .trim()

        .toUpperCase();

}

// ============================================================================
// OBTÉM
// ============================================================================

export function getStatus(status) {

    return (

        STATUS[normalizar(status)] ||

        {

            classe: "status-default",

            icone: "⚪"

        }

    );

}

// ============================================================================
// CLASSE
// ============================================================================

export function getStatusClass(status) {

    return getStatus(status).classe;

}

// ============================================================================
// ÍCONE
// ============================================================================

export function getStatusIcon(status) {

    return getStatus(status).icone;

}

// ============================================================================
// BADGE
// ============================================================================

export function renderStatus(status) {

    const item = getStatus(status);

    return `

        <span class="status ${item.classe}">

            ${item.icone}

            ${status}

        </span>

    `;

}
