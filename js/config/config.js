// ============================================================================
// CONFIG
// Painel Frota
// Arquivo: js/config/config.js
// ============================================================================

// ============================================================================
// API
// ============================================================================

export const CONFIG = {

    API_URL:
        "https://script.google.com/macros/s/AKfycbxk5OLhLT4dxTVUa-9IpVRAf70MG8F3qNcL597aPq9O47wj9m7mBytdt3dEZE3GMlBHmw/exec",

    UPDATE_INTERVAL:
        30000,

    DATE_FORMAT:
        "pt-BR",

    TIME_FORMAT:
        "pt-BR"

};


export async function apiGet(rota){


const resposta =
await fetch(
`${API_URL}?rota=${rota}`
);


return await resposta.json();


}



export async function apiPost(
rota,
dados
){


const resposta =
await fetch(
API_URL,
{

method:"POST",

body:JSON.stringify({

rota,

dados

})

});


return await resposta.json();


}

// ============================================================================
// ABAS
// ============================================================================

export const ABAS = {

    LANCAMENTOS:
        "LANCAMENTOS",
    
    VEICULOS:
        "VEÍCULOS",
    
    EMPREGADOS:
        "EMPREGADOS",

    MOTORISTAS:
        "MOTORISTAS",

    AGENDA:
        "AGENDA DO DIA",

    SOCIAL:
        "AGENDA SERVIÇO SOCIAL"

};

// ============================================================================
// STATUS
// ============================================================================

export const STATUS = {

    AGENDADO:
        "AGENDADO",

    EM_ANDAMENTO:
        "EM ANDAMENTO",

    VIAGEM: "VIAGEM",

    MANUTENCAO: "MANUTENÇÃO",

    CONCLUIDO: "CONCLUÍDO",

    FINALIZADO:
        "FINALIZADO",

    CANCELADO:
        "CANCELADO",

    LIVRE: "LIVRE",

    OCUPADO: "OCUPADO"

};

// ============================================================================
// CLASSES CSS
// ============================================================================

export const STATUS_CLASS = {

    AGENDADO:
        "status-agendado",

    "EM ANDAMENTO":
        "status-andamento",

    FINALIZADO:
        "status-finalizado",

    CANCELADO:
        "status-cancelado"

};

// ============================================================================
// ÍCONES
// ============================================================================

export const STATUS_ICON = {

    AGENDADO:
        "🟡",

    "EM ANDAMENTO":
        "🟢",

    FINALIZADO:
        "✅",

    CANCELADO:
        "🔴",

    LIVRE: "🟢",

    OCUPADO: "🔴",

    VIAGEM: "✈️",

    MANUTENCAO: "🔵",

    CONCLUIDO: "✅",

    CANCELADO: "❌"

};

// ============================================================================
// CAMPOS
// ============================================================================

export const CAMPOS = {

    ID: "ID",

    DATA: "Data",

    HORA: "Hora",

    EMPREGADO: "Empregado / Matrícula",

    VEICULO: "Veículo",

    PASSAGEIRO: "Passageiro / Setor / Motivo",

    ITINERARIO: "Itinerário",

    STATUS: "Status"

};

// ============================================================================
// CORES
// ============================================================================

export const CORES = {

    VERDE: "#16A34A",

    AZUL: "#2563EB",

    VERMELHO: "#DC2626",

    AMARELO: "#FACC15",

    CINZA: "#6B7280"

};

// ============================================================================
// MENSAGENS
// ============================================================================

export const MENSAGENS = {

    SALVO: "Registro salvo com sucesso.",

    EXCLUIDO: "Registro excluído com sucesso.",

    ALTERADO: "Registro atualizado com sucesso.",

    ERRO: "Ocorreu um erro ao processar a solicitação.",

    CARREGANDO: "Carregando dados..."

};
