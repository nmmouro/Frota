const API =
    "https://script.google.com/macros/s/AKfycbzamGRiIf-q3eZKlCiKbKyC4IENZuhcWu5oxclAtMC5lkRYfx4H8x8e4g46HL06_jqZ0Q/exec";

export async function listar(aba){

    const resposta =
        await fetch(

            `${API}?acao=listar&aba=${aba}`

        );

        
    const json =
        await resposta.json();

    return json.dados;

}

export async function salvar(
    aba,
    dados
){

    const resposta =
        await fetch(API,{

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({

                acao:"salvar",

                aba,

                dados

            })

        });

    return await resposta.json();

}
