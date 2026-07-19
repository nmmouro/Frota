// ============================================================================
// DATAS
// Arquivo: js/utils/datas.js
// ============================================================================

// ================= DATA ATUAL =================

export function hoje() {

    return new Date();

}

// ================= DATA BR =================

export function dataBR(data = new Date()) {

    return new Date(data).toLocaleDateString(

        "pt-BR"

    );

}

// ================= HORA =================

export function hora(data = new Date()) {

    return new Date(data).toLocaleTimeString(

        "pt-BR",

        {

            hour: "2-digit",

            minute: "2-digit"

        }

    );

}

// ================= DATA E HORA =================

export function dataHora(data = new Date()) {

    return new Date(data).toLocaleString(

        "pt-BR"

    );

}

// ================= INPUT DATE =================

export function dataInput(data = new Date()) {

    return new Date(data)

        .toISOString()

        .split("T")[0];

}

// ================= INPUT TIME =================

export function horaInput(data = new Date()) {

    return new Date(data)

        .toTimeString()

        .slice(0, 5);

}

// ================= DIFERENÇA =================

export function diferencaDias(

    inicio,

    fim

) {

    const ms =

        new Date(fim) -

        new Date(inicio);

    return Math.floor(

        ms / 86400000

    );

}

// ================= É HOJE =================

export function ehHoje(data) {

    return dataBR(data) === dataBR();

}

// ================= ORDENAÇÃO =================

export function ordenarPorData(

    lista,

    campo

) {

    return [...lista].sort(

        (a, b) =>

            new Date(a[campo]) -

            new Date(b[campo])

    );

}

// ================= BR -> INPUT =================

export function dataParaInput(data) {

    if (!data) return "";

    // já está no formato yyyy-MM-dd
    if (data.includes("-")) return data;

    const [dia, mes, ano] = data.split("/");

    return `${ano}-${mes.padStart(2,"0")}-${dia.padStart(2,"0")}`;

}

// ================= INPUT -> BR =================

export function inputParaData(data) {

    if (!data) return "";

    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;

}

// ================= HORA INPUT =================

export function horaParaInput(hora) {

    return hora || "";

}

export function dataParaInput(data) {

    if (!data) return "";

    const [dia, mes, ano] = data.split("/");

    return `${ano}-${mes.padStart(2,"0")}-${dia.padStart(2,"0")}`;

}

export function inputParaData(data) {

    if (!data) return "";

    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;

}

export function horaParaInput(hora) {

    return (hora || "").substring(0,5);

}
