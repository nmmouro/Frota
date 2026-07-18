// ============================================================================
// API
// ============================================================================


import {

    CONFIG

} from "../config/config.js";




// ================= GET =================


export async function apiGet(aba){


    const url =

        `${CONFIG.API_URL}?acao=listar&aba=${encodeURIComponent(aba)}`;



    const resposta =

        await fetch(url);



    if(!resposta.ok){


        throw new Error(

            "Erro ao consultar a API."

        );


    }



    return await resposta.json();



}



// ================= POST =================


export async function apiPost(

    aba,

    dados

){


    const resposta =

        await fetch(

            CONFIG.API_URL,

            {


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


            }

        );



    return await resposta.json();


}
