const { Model, DataTypes } = require('sequelize');

class Conta extends Model {
    static init(sequelize) {
        super.init({
            numero_conta: DataTypes.STRING,
            saldo: DataTypes.DECIMAL(10, 2),
        }, {
            sequelize,
            tableName: 'contas'})
    }

    static associate(models) {
        this.belongsTo(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
    }
}

module.exports = Conta;