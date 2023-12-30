class escola {
    nome: String = '';
    registro_identificacao: String = '';
    comercios: Array<Array<String>> = [];
    estudantes: Array<Array<String>> = [];
    professores: Array<Array<String>> = [];

    constructor(nome: String,registro_identificacao: String){
        this.nome = nome;
        this.registro_identificacao = registro_identificacao
    }

    Adicionar_aluno(nome: String, matricula: String, id: String): void {
        let novo_aluno: Array<String> = [nome,matricula, id];
        this.estudantes.push(novo_aluno)
    }

    Adicionar_prof(nome: String, identificacao: String){
        let novo_prof: Array<String> = [nome,identificacao];
        this.professores.push(novo_prof)
    }

    Adicionar_comercio(nome: String, identificacao: String){
        let novo_comerc: Array<String> = [nome,identificacao];
        this.comercios.push(novo_comerc)
    }

}


export{escola}