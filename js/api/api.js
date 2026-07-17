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
