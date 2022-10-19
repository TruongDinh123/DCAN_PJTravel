'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tourdetails', {
    // numberDay: DataTypes.STRING,
    // numberPerson: DataTypes.STRING,
    // departTime: DataTypes.DATE,
    // endTime: DataTypes.DATE,
    // tourID: DataTypes.INTEGER,
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numberDay: {
        type: Sequelize.STRING
      },
      numberPerson: {
        type: Sequelize.STRING
      },
      departTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      tourID: {
        type: Sequelize.INTEGER
      },
      createAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tourdetails');
  }
};