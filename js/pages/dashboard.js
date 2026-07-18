import {

    carregarDashboard

} from "../services/dashboard.js";

async function carregarDados() {

    const dados = await carregarDashboard();

    console.log(dados.painel);

    console.log(dados.veiculos);

    console.log(dados.motoristas);

    console.log(dados.agenda);

    console.log(dados.social);

}
