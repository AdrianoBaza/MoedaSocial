const Sequelize = require('sequelize')

const conect_bd = new Sequelize('moeda_social','root','exemplo123',{
    host: "localhost",
    dialect: "mysql"
})

let perfil_estudante = conect_bd.define('perfil',{
    nome: Sequelize.STRING,
    matricula: Sequelize.STRING,
    senha: Sequelize.STRING,
    saldo: Sequelize.FLOAT
})


function new_perfil_estudante(nome, matricula, senha) {
    conect_bd.sync().then(()=>{
        perfil_estudante.create({
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