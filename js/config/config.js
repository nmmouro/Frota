// ============================================================================
// CONFIGURAÇÕES GERAIS DA APLICAÇÃO
// Projeto: Painel Frota
// Arquivo: js/config/config.js
// ============================================================================

export const CONFIG = {


    API_URL:

    "https://script.google.com/macros/s/AKfycbyJQC-gvJdH8V84J1ADvgYG7SyZti0YueRHw6gVa6WrQPdYtnhuYqez0x-8iwoO_Gr6mw/exec",

// ================= ABAS =================

ABAS = {

    LANCAMENTOS: "LANÇAMENTOS",

    VEICULOS: "VEÍCULOS",
    
    EMPREGADOS: "EMPREGADOS",

    MOTORISTAS: "MOTORISTAS",

    AGENDA: "AGENDA DO DIA",

    SOCIAL: "AGENDA SERVIÇO SOCIAL"    

}  



// ================= STATUS =================

STATUS = {

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

ICONES = {

    LIVRE: "🟢",

    OCUPADO: "🔴",

    VIAGEM: "✈️",

    MANUTENCAO: "🔵",

    AGENDADO: "🟡",

    CONCLUIDO: "✅",

    CANCELADO: "❌"

};

// ================= CORES =================

CORES = {

    VERDE: "#16A34A",

    AZUL: "#2563EB",

    VERMELHO: "#DC2626",

    AMARELO: "#FACC15",

    CINZA: "#6B7280"

};

// ================= MENSAGENS =================

MENSAGENS = {

    SALVO: "Registro salvo com sucesso.",

    EXCLUIDO: "Registro excluído com sucesso.",

    ALTERADO: "Registro atualizado com sucesso.",

    ERRO: "Ocorreu um erro ao processar a solicitação.",

    CARREGANDO: "Carregando dados..."

};

// ================= TABELAS =================

TABELAS = {

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
}
