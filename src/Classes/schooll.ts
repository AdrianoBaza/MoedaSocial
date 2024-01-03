class escola {
    nome: String = '';
    registro_identificacao: String = '';
    comercios: Array<Object> = [];
    estudantes: Array<Object> = [];
    professores: Array<Object> = [];

    constructor(nome: String,registro_identificacao: String){
        this.nome = nome;
        this.registro_identificacao = registro_identificacao
    }

    Adicionar_aluno(nome: String, matricula: String, id: String): void {
        let novo_aluno: Object = {
            nome: nome,
            matricula: matricula,
            id: id
        };
        this.estudantes.push(novo_aluno)
    }

    Adicionar_prof(nome: String, identificacao: String){
        let novo_prof: Object = {
            nome: nome,
            identificacao: identificacao
        };
        this.professores.push(novo_prof)
    }

    Adicionar_comercio(nome: String, identificacao: String){
        let novo_comerc: Object = {
            nome: nome,
            identificacao: identificacao
        };
        this.comercios.push(novo_comerc)
    }

}


export{escola}