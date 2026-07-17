import { obterLancamentos }
    from "../services/lancamentos.js";

import { renderTabela }
    from "../ui/table.js";

async function iniciar() {

    try {

        const dados = await obterLancamentos();

        renderTabela(
            document.getElementById("tabela"),
            dados
        );

    } catch (erro) {

        console.error("Erro ao carregar lançamentos:", erro);

    }

}

iniciar();