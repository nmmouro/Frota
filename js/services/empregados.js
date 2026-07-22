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

const ABA = ABAS.EMPREADOS;


// ============================================================================


export async function obterEmpregados() {
    return listar(ABA);
}

export async function obterEmpregado(id) {
    return buscar(ABA, id);
}

export async function salvarEmpregado(dados) {
    return salvar(ABA, dados);
}

export async function atualizarEmprregado(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirEmpregadO(id) {
    return excluir(ABA, id);
}
