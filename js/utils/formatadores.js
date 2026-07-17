// ================= DATA =================

export function formatarData(valor) {

    if (!valor) return "";

    const data = new Date(valor);

    if (isNaN(data.getTime())) {
        return valor;
    }

    return data.toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo"
    });

}

// ================= HORA =================

export function formatarHora(valor) {

    if (!valor) return "";

    const data = new Date(valor);

    if (isNaN(data.getTime())) {
        return valor;
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });

}

// ================= DATA + HORA =================

export function formatarDataHora(data, hora) {

    return `${formatarData(data)} ${formatarHora(hora)}`;

}

// ================= KM =================

export function formatarKm(valor) {

    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return "";
    }

    return Number(valor).toLocaleString("pt-BR");

}

// ================= NÚMERO =================

export function formatarNumero(valor, casas = 0) {

    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return "";
    }

    return Number(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });

}

// ================= TEXTO =================

export function formatarTexto(valor) {

    return valor ?? "";

}


export function preencherSelect(
    select,
    lista,
    campoTexto,
    campoValor,
    placeholder = "Selecione..."
) {

    select.innerHTML = "";

    const option = document.createElement("option");

    option.value = "";
    option.textContent = placeholder;

    select.appendChild(option);

    lista.forEach(item => {

        const opt = document.createElement("option");

        opt.value = item[campoValor];
        opt.textContent = item[campoTexto];

        select.appendChild(opt);

    });

}
