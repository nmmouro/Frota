import { listar } from "../api/api.js";

export async function obterMotoristas() {

    return await listar("MOTORISTAS");

}
