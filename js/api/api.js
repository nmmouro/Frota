const API =
    "https://script.google.com/macros/s/SEU_DEPLOY/exec";

export async function listar(aba){

    const resposta =
        await fetch(

            `${API}?acao=listar&aba=${aba}`

        );

    const json =
        await resposta.json();

    return json.dados;

}
