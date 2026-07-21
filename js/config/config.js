// ============================================================================
// CONFIG
// Painel Frota
// Arquivo: js/config/config.js
//
// Configurações globais da aplicação
// ============================================================================



// ============================================================================
// APLICAÇÃO
// ============================================================================


export const CONFIG = {


    API_URL:

    "https://script.google.com/macros/s/AKfycbwjd9hN1vZQIHDCCxIZB5pbyYY_jVovblsq8JbhSha63R3pfe73YDnq6Q5ruq4q-JlMfw/exec",



    UPDATE_INTERVAL:

    30000,



    DATE_FORMAT:

    "pt-BR",



    TIME_FORMAT:

    "pt-BR"


};




// ============================================================================
// ABAS GOOGLE SHEETS
// ============================================================================


export const ABAS = {


    LANCAMENTOS: "LANCAMENTOS",

    VEICULOS: "VEICULOS",

    EMPREGADOS: "EMPREGADOS",

    AGENDA: "AGENDA DO DIA",

    SOCIAL: "AGENDA SERVIÇO SOCIAL"


};




// ============================================================================
// STATUS DO SISTEMA
// ============================================================================


export const STATUS = {


    AGENDADO:

    "AGENDADO",



    EM_ANDAMENTO:

    "EM ANDAMENTO",



    VIAGEM:

    "VIAGEM",



    MANUTENCAO:

    "MANUTENÇÃO",



    CONCLUIDO:

    "CONCLUÍDO",



    FINALIZADO:

    "FINALIZADO",



    CANCELADO:

    "CANCELADO",



    LIVRE:

    "LIVRE",



    OCUPADO:

    "OCUPADO"


};




// ============================================================================
// CLASSES CSS STATUS
// ============================================================================


export const STATUS_CLASS = {


    AGENDADO:

    "status-agendado",



    "EM ANDAMENTO":

    "status-andamento",



    VIAGEM:

    "status-viagem",



    MANUTENCAO:

    "status-manutencao",



    FINALIZADO:

    "status-finalizado",



    CANCELADO:

    "status-cancelado"


};




// ============================================================================
// ÍCONES STATUS
// ============================================================================


export const STATUS_ICON = {


    AGENDADO:

    "🟡",



    "EM ANDAMENTO":

    "🟢",



    VIAGEM:

    "✈️",



    MANUTENCAO:

    "🔵",



    FINALIZADO:

    "✅",



    CONCLUIDO:

    "✅",



    CANCELADO:

    "🔴",



    LIVRE:

    "🟢",



    OCUPADO:

    "🔴"


};




// ============================================================================
// CAMPOS PADRÃO LANÇAMENTOS
// ============================================================================


export const CAMPOS = {


    ID:

    "ID",



    DATA:

    "Data",



    HORA:

    "Hora",



    EMPREGADO:

    "Empregado / Matrícula",



    VEICULO:

    "Veículo",



    PASSAGEIRO:

    "Passageiro / Setor / Motivo",



    ITINERARIO:

    "Itinerário",



    STATUS:

    "Status"


};

// ============================================================================
// CAMPOS PADRÃO EMPREGADOS
// ============================================================================


export const CAMPOS = {


    ID:

    "ID",


    DATA:

    "Data",


    FOTO:

    "Foto",


    EMPREGADO:

    "Empregado",
    

    MATRICULA:

    "Matrícula",


    DIRETORIA:

    "Diretoria",


    SETOR:

    "Setor",


    USUÁRIO:

    "Usuário",
    

     CONDIÇÃO:

    "Condição",


    STATUS:

    "Status"


};


// ============================================================================
// CAMPOS PADRÃO VEÍCULOS
// ============================================================================


export const CAMPOS = {


    ID:

    "ID",


    DATA:

    "Data",


    FOTO:

    "Foto",


    PLACA:

    "Placa",
    

    MODELO:

    "Modelo",


    MARCA:

    "Marca",


    ANO:

    "Ano",


    COR:

    "Cor",
    

    COMMBUSTÍVEL:

    "Combustível",


    STATUS:

    "Status"


};





// ============================================================================
// CORES DA INTERFACE
// ============================================================================


export const CORES = {


    VERDE:

    "#16A34A",



    AZUL:

    "#2563EB",



    VERMELHO:

    "#DC2626",



    AMARELO:

    "#FACC15",



    CINZA:

    "#6B7280"


};




// ============================================================================
// MENSAGENS PADRÃO
// ============================================================================


export const MENSAGENS = {


    SALVO:

    "Registro salvo com sucesso.",



    EXCLUIDO:

    "Registro excluído com sucesso.",



    ALTERADO:

    "Registro atualizado com sucesso.",



    ERRO:

    "Ocorreu um erro ao processar a solicitação.",



    CARREGANDO:

    "Carregando dados..."


};
