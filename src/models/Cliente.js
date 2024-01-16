const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            data_nascimento: DataTypes.DATE,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize,
        })
    }

    static associate(models) {
        this.hasMany(models.Conta, { foreignKey: 'cliente_id', as: 'conta' });
    }

}

module.exports = Cliente;