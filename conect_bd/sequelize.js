const Sequelize = require('sequelize')
const { SELECT } = require('sequelize/types/query-types')

const conect_bd = new Sequelize('moeda_social','root','exemplo123',{
    host: "localhost",
    dialect: "mysql"
})

const perfil_estudante = conect_bd.define('perfil',{
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    matricula: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
        primaryKey: false
    }
})

const Extrato_entrada = conect_bd.define('entradas', {
    nome_remetente: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    id_remetente: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false,
        primaryKey: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false
    }
})

const Extrato_saída = conect_bd.define('saídas', {
    nome_destinatario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    id_destinatario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false,
        primaryKey: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: false
    }
})  

function new_ransfer_entrada(id, valor, data, hora) {
    conect_bd.sync().then(()=>{
        Extrato_entrada.create({
            id: id,
            valor:valor,
            data: data,
            hora: hora
        })
    })
}

function new_ransfer_entrada(id, valor, data, hora) {
    conect_bd.sync().then(()=>{
        Extrato_entrada.create({
            id: id,
            valor:valor,
            data: data,
            hora: hora
        })
    })
}

function new_perfil_estudante(id,nome, matricula, senha) {
    conect_bd.sync().then(()=>{
        perfil_estudante.create({
            id: id,
            nome: nome,
            matricula: matricula,
            senha:senha,
            saldo: 0.00
        })
    })
}

conect_bd.authenticate().then(()=>{
    console.log('conectado ao banco de dados');
}).catch((erro)=>{
    console.log('Falha na conexão:'+ erro);
})