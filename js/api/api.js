const API =
    "https://script.google.com/macros/s/AKfycbxDxS7bONLdSSnEA9SSq87jBm4uzyGntV6aqegxgI_8tyhdX3ep5Wd-TYErVNpCdD25/exec";

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
