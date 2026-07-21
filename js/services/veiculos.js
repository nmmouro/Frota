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

const ABA = ABAS.VEICULOS;


// ============================================================================


export async function obterVeiculos() {
    return listar(ABA);
}

export async function obterVeiculos(id) {
    return buscar(ABA, id);
}

export async function salvarVeiculos(dados) {
    return salvar(ABA, dados);
}

export async function atualizarLancamentoVeiculos(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirVeiculos(id) {
    return excluir(ABA, id);
}
