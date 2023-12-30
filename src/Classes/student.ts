class estudante {
    nome: String;
    matricula: String;
    id_aluno: String = ''
    saldo: number = 100.00
    entradas_moeda: Array<string> = []
    saidas_moeda: Array<string> = []

    constructor(nome:String, matricula: String){
        this.nome = nome
        this.matricula = matricula
    }

    BRL_saldo(){
        let valor_BRL = this.saldo.toLocaleString('pt-br', {minimumFractionDigits: 2})
        return valor_BRL
    }
}

export{estudante}