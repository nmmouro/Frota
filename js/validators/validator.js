// ============================================================================
// VALIDATOR
// Arquivo: js/validators/validator.js
//
// Responsável pelas validações genéricas das operações da API
// ============================================================================


// ============================================================================
// VALIDAR LISTAGEM
// ============================================================================

function validarListagem(aba) {

    if (!aba) {
        throw new Error("Aba não informada para listagem.");
    }

    return true;
}


// ============================================================================
// VALIDAR BUSCA
// ============================================================================

function validarBusca(aba, id) {

    if (!aba) {
        throw new Error("Aba não informada para busca.");
    }

    if (!id) {
        throw new Error("ID não informado para busca.");
    }

    return true;
}


// ============================================================================
// VALIDAR CADASTRO
// ============================================================================

function validarCadastro(aba, dados) {

    if (!aba) {
        throw new Error("Aba não informada para cadastro.");
    }

    if (!dados || typeof dados !== "object") {
        throw new Error("Dados inválidos para cadastro.");
    }

    return true;
}


// ============================================================================
// VALIDAR EDIÇÃO
// ============================================================================

function validarEdicao(aba, id, dados) {

    if (!aba) {
        throw new Error("Aba não informada para edição.");
    }

    if (!id) {
        throw new Error("ID não informado para edição.");
    }

    if (!dados || typeof dados !== "object") {
        throw new Error("Dados inválidos para edição.");
    }

    return true;
}


// ============================================================================
// VALIDAR EXCLUSÃO
// ============================================================================

function validarExclusao(aba, id) {

    if (!aba) {
        throw new Error("Aba não informada para exclusão.");
    }

    if (!id) {
        throw new Error("ID não informado para exclusão.");
    }

    return true;
}


// ============================================================================
// EXPORT
// ============================================================================

export const Validator = {

    validarListagem,
    validarBusca,
    validarCadastro,
    validarEdicao,
    validarExclusao

};
