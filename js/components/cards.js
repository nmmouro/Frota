export default class Cadastro {

    constructor(form) {

        this.form = form;

        this.botao =
            form.querySelector(
                'button[type="submit"]'
            );

    }

    bloquear() {

        this.botao.disabled = true;

        this.textoOriginal =
            this.botao.textContent;

        this.botao.textContent =
            "Salvando...";

    }

    liberar() {

        this.botao.disabled = false;

        this.botao.textContent =
            this.textoOriginal;

    }

    obter(id) {

        return document.getElementById(id);

    }

    valor(id) {

        return this.obter(id).value;

    }

    limpar() {

        this.form.reset();

    }

    mensagem(texto) {

        alert(texto);

    }

}
