// ============================================================================
// CONFIGURAÇÕES GERAIS DA APLICAÇÃO
// Projeto: Painel Frota
// Arquivo: js/config/config.js
// ============================================================================

// ================= APP =================

export const APP = {

    NOME: "Painel Frota",

    VERSAO: "1.0.0",

    AUTOR: "Neidival Mouro",

    AMBIENTE: "PRODUCAO"

};

// ================= API =================

export const API = {

    BASE_URL: "https://script.google.com/macros/s/AKfycbxDxS7bONLdSSnEA9SSq87jBm4uzyGntV6aqegxgI_8tyhdX3ep5Wd-TYErVNpCdD25/exec",

    TIMEOUT: 10000,

    HEADERS: {

        "Content-Type": "application/json"

    }

};

// ================= ABAS =================

export const ABAS = {

    DASHBOARD: "PAINEL",

    LANCAMENTOS: "LANÇAMENTOS",

    VEICULOS: "VEÍCULOS",
    
    EMPREGADOS: "EMPREGADOS",

    MOTORISTAS: "MOTORISTAS",

    AGENDA: "AGENDA DO DIA",

    SOCIAL: "AGENDA SERVIÇO SOCIAL",

    ABASTECIMENTOS: "ABASTECIMENTOS",

    MANUTENCOES: "MANUTENÇÕES"

};

// ================= STATUS =================

export const STATUS = {

    AGENDADO: "AGENDADO",

    EM_ANDAMENTO: "EM ANDAMENTO",

    VIAGEM: "VIAGEM",

    MANUTENCAO: "MANUTENÇÃO",

    CONCLUIDO: "CONCLUÍDO",

    CANCELADO: "CANCELADO",

    LIVRE: "LIVRE",

    OCUPADO: "OCUPADO"

};

// ================= ÍCONES =================

export const ICONES = {

    LIVRE: "🟢",

    OCUPADO: "🔴",

    VIAGEM: "✈️",

    MANUTENCAO: "🔵",

    AGENDADO: "🟡",

    CONCLUIDO: "✅",

    CANCELADO: "❌"

};

// ================= CORES =================

export const CORES = {

    VERDE: "#16A34A",

    AZUL: "#2563EB",

    VERMELHO: "#DC2626",

    AMARELO: "#FACC15",

    CINZA: "#6B7280"

};

// ================= MENSAGENS =================

export const MENSAGENS = {

    SALVO: "Registro salvo com sucesso.",

    EXCLUIDO: "Registro excluído com sucesso.",

    ALTERADO: "Registro atualizado com sucesso.",

    ERRO: "Ocorreu um erro ao processar a solicitação.",

    CARREGANDO: "Carregando dados..."

};

// ================= TABELAS =================

export const TABELAS = {

    VEICULOS: {

        LINHAS: 5

    },

    MOTORISTAS: {

        LINHAS: 5

    },

    DASHBOARD: {

        LINHAS: 20

    }

};

// ================= REFRESH =================

export const REFRESH = {

    DASHBOARD: 30000,

    RELATORIOS: 60000

};
