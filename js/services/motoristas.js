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

export async function obterMotorista(id) {
    return buscar(ABA, id);
}

export async function salvarMotorista(dados) {
    return salvar(ABA, dados);
}

export async function atualizarMotorista(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirMotorista(id) {
    return excluir(ABA, id);
}
