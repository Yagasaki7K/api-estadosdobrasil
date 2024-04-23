interface Estado {
    id: string;
    nome: string;
}

interface Cidade {
    siglaEstado: string;
    nome: string;
}

interface Database {
    estados: Estado[];
    cidades: Cidade[];
}
  
function Brasil(): Database {
    return require('../database.json');
}
  
export default Brasil;
