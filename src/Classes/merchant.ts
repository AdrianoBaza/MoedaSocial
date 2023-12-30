class comerciante {
    nome: String;
    cnpj_cpf: String;
    saldo: number = 100.00
    entradas_moeda: Array<string> = []
    saidas_moeda: Array<string> = []

    constructor(nome:String, cnpj_cpf: String){
        this.nome = nome
        this.cnpj_cpf = cnpj_cpf
    }

    BRL_saldo(){
        let valor_BRL = this.saldo.toLocaleString('pt-br', {minimumFractionDigits: 2})
        return valor_BRL
    }
}

export{comerciante}