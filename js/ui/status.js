// ============================================================================
// STATUS
// Arquivo: js/ui/status.js
// ============================================================================

// ================= IMPORTS =================

import {

    STATUS,
    ICONES

} from "../config/config.js";

// ================= CLASSES =================

const CLASSES = {

    [STATUS.LIVRE]: "status-livre",

    [STATUS.OCUPADO]: "status-ocupado",

    [STATUS.AGENDADO]: "status-agendado",

    [STATUS.EM_ANDAMENTO]: "status-andamento",

    [STATUS.VIAGEM]: "status-viagem",

    [STATUS.MANUTENCAO]: "status-manutencao",

    [STATUS.CONCLUIDO]: "status-concluido",

    [STATUS.CANCELADO]: "status-cancelado"

};

// ================= NORMALIZAÇÃO =================

export function normalizarStatus(status = "") {

    return status

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .trim()

        .toUpperCase();

}

// ================= CLASSE CSS =================

export function obterClasseStatus(status) {

    const chave = normalizarStatus(status);

    return CLASSES[chave] ?? "status-default";

}

// ================= ÍCONE =================

export function obterIconeStatus(status) {

    const chave = normalizarStatus(status);

    return ICONES[chave] ?? "⚪";

}

// ================= TEXTO =================

export function formatarStatus(status) {

    return `${

        obterIconeStatus(status)

    } ${status}`;

}

// ================= BADGE =================

export function criarBadgeStatus(status) {

    const span = document.createElement("span");

    span.className = `badge ${obterClasseStatus(status)}`;

    span.textContent = formatarStatus(status);

    return span;

}
