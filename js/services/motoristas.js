import {

    listar,
    buscar,
    salvar,
    editar,
    excluir

} from "../api/api.js";

import {

    ABAS

} from "../config/config.js";

const ABA = ABAS.MOTORISTAS;


// ============================================================================


export async function obterMotoristas() {
    return listar(ABA);
}

export async function obterMotoristas(id) {
    return buscar(ABA, id);
}

export async function salvarMotoristas(dados) {
    return salvar(ABA, dados);
}

export async function atualizarLancamentoMotoristas(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirMotoristas(id) {
    return excluir(ABA, id);
}
