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

export async function obterEmpregados(id) {
    return buscar(ABA, id);
}

export async function salvarEmpregados(dados) {
    return salvar(ABA, dados);
}

export async function atualizarEmprregados(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirEmpregados(id) {
    return excluir(ABA, id);
}
