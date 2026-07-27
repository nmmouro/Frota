// ============================================================================
// VALIDATOR
// Arquivo: js/validators/validator.js
//
// Validações genéricas utilizadas pela API
// ============================================================================


// ============================================================================
// LISTAR
// ============================================================================

function validarListagem(aba) {

    if (!aba) {
        throw new Error("Aba não informada para listagem.");
    }

    return true;
}


// ============================================================================
// BUSCAR
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
// SALVAR
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
// EDITAR
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
// EXCLUIR
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
// OBJETO VALIDATOR
// ============================================================================

const Validator = {

    validarListagem,
    validarBusca,
    validarCadastro,
    validarEdicao,
    validarExclusao

};


// ============================================================================
// EXPORT
// ============================================================================

export default Validator;
