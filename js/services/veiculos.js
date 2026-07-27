import { criarCrud } from "./crudService.js";

} from "../api/api.js";

import {

    ABAS

} from "../config/config.js";

const veiculos = criarCrud(ABAS.VEICULOS);


// ============================================================================


export async function obterVeiculos() {
    return listar(ABA);
}

export async function obterVeiculo(id) {
    return buscar(ABA, id);
}

export async function salvarVeiculo(dados) {
    return salvar(ABA, dados);
}

export async function atualizarVeiculo(id, dados) {
    return editar(ABA, id, dados);
}

export async function excluirVeiculo(id) {
    return excluir(ABA, id);
}
