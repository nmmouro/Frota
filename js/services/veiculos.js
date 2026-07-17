import { listar } from "../api/api.js";

export async function obterVeiculos() {

    return await listar("VEICULOS");

}
