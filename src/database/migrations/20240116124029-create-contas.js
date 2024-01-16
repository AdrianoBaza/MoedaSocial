'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contas', {
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cliente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'clientes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    numero_conta: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    saldo: {
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0.0,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Contas');
  },
};
