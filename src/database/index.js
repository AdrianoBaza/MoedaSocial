const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Cliente = require('../models/Cliente');
const Conta = require('../models/Conta');

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Conta.init(connection);

Cliente.associate(connection.models);
Conta.associate(connection.models);

module.exports = connection;