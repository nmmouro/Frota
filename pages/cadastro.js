import {
    salvarLancamento
} from "../services/lancamentos.js";

import {
    obterMotoristas
} from "../services/motoristas.js";

import {
    obterVeiculos
} from "../services/veiculos.js";



const form =
    document.getElementById("form");

const cmbMotorista =
    document.getElementById("empregado");

const cmbVeiculo =
    document.getElementById("veiculo");


init();

async function init(){

    await carregarMotoristas();

    await carregarVeiculos();

}


async function carregarMotoristas(){

    const lista =
        await obterMotoristas();

    cmbMotorista.innerHTML = `
        <option value="">
            Selecione...
        </option>
    `;

    lista.forEach(item=>{

        cmbMotorista.innerHTML += `
            <option value="${item.Nome}">
                ${item.Nome}
            </option>
        `;

    });

}


let veiculos = [];

async function carregarVeiculos(){

    veiculos =
        await obterVeiculos();

    cmbVeiculo.innerHTML = `
        <option value="">
            Selecione...
        </option>
    `;

    veiculos.forEach(item=>{

        cmbVeiculo.innerHTML += `
            <option value="${item.Placa}">
                ${item.Placa}
            </option>
        `;

    });

}

form.addEventListener("submit", salvar);

async function salvar(event) {

    event.preventDefault();

    const botao =
        form.querySelector('button[type="submit"]');

    botao.disabled = true;

    try {

        const dados = {

            Data: document.getElementById("data").value,

            Hora: document.getElementById("hora").value,

            Empregado: cmbMotorista.value,

           Veiculo: cmbVeiculo.value,


            Motivo: document.getElementById("motivo").value,

            Itinerario: document.getElementById("itinerario").value,

            Status: document.getElementById("status").value

        };

        validar(dados);

        const resposta =
            await salvarLancamento(dados);

        if (!resposta.sucesso) {

            throw new Error(
                resposta.mensagem ||
                "Erro ao salvar."
            );

        }

        alert("Lançamento salvo com sucesso!");

        location.href = "lancamentos.html";

    }
    catch (erro) {

        console.error(erro);

        alert(erro.message);

    }
    finally {

        botao.disabled = false;

    }

}

function validar(dados) {

    if (!dados.Data)
        throw new Error("Informe a data.");

    if (!dados.Hora)
        throw new Error("Informe a hora.");

    if (!dados.Empregado)
        throw new Error("Selecione o empregado.");

    if (!dados.Veiculo)
        throw new Error("Selecione o veículo.");

}
