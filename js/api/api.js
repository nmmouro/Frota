const API =
    "https://script.google.com/macros/s/AKfycbz_xVDVk0jtE6ID4KnpLAI3AiWp3pelItvsAVMYespynzc6Vfew1uLv3qdzCi358xPo/exec";

export async function listar(aba){

    const resposta =
        await fetch(

            `${API}?acao=listar&aba=${aba}`

        );

    const json =
        await resposta.json();

    return json.dados;

}
