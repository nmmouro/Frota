// ============================================================================
// LOADING
// Arquivo: js/ui/loading.js
// ============================================================================

// ================= ELEMENTO =================

const ID_LOADING = "loading";


function elementoLoading(){

    return document.getElementById(
        ID_LOADING
    );

}

// ================= MOSTRAR =================

export function mostrarLoading(
    mensagem = "Carregando..."
){


    const elemento = elementoLoading();


    if(!elemento){

        console.warn(
            "Elemento #loading não encontrado"
        );

        return;

    }


    elemento.textContent = mensagem;


    elemento.classList.add(
        "ativo"
    );


}

// ================= ESCONDER =================

export function esconderLoading(){


    const elemento = elementoLoading();


    if(!elemento){

        return;

    }


    elemento.textContent = "";


    elemento.classList.remove(
        "ativo"
    );


}
