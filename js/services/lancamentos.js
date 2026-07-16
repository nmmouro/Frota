import { listar } from "../api/api.js";

export async function obterLancamentos(){

    return await listar(
        "LANCAMENTOS"
    );

}
