import {
    obterVeiculos
} from "./veiculos.js";

import {
    obterMotoristas
} from "./motoristas.js";

import {
    obterLancamentos
} from "./lancamentos.js";

import {
    obterAgenda
} from "./agenda.js";

import {
    obterAgendaSocial
} from "./social.js";

export async function obterDashboard() {

    const [

        veiculos,
        motoristas,
        painel,
        agenda,
        social

    ] = await Promise.all([

        obterVeiculos(),
        obterMotoristas(),
        obterLancamentos(),
        obterAgenda(),
        obterAgendaSocial()

    ]);

    return {

        veiculos,

        motoristas,

        painel,

        agenda,

        social

    };

}
