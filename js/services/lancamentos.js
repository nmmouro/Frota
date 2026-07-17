import { listar } from "../api/api.js";

export async function obterLancamentos() {
    return listar("LANCAMENTOS");
}

export async function salvarLancamento(){...}

export async function excluirLancamento(){...}

export async function atualizarLancamento(){...}

export async function obterLancamento(id){...}
