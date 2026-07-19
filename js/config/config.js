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
        "https://script.google.com/macros/s/AKfycbyJQC-gvJdH8V84J1ADvgYG7SyZti0YueRHw6gVa6WrQPdYtnhuYqez0x-8iwoO_Gr6mw/exec",

    UPDATE_INTERVAL:
        30000,

    DATE_FORMAT:
        "pt-BR",

    TIME_FORMAT:
        "pt-BR"

};

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
