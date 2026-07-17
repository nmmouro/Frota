import {
    obterLancamentos
}
from ".js/services/lancamentos.js";

import {
    renderTabela
}
from "./ui/table.js";

const dados =
    await obterLancamentos();

renderTabela(

    document.getElementById("tabela"),

    dados

);
