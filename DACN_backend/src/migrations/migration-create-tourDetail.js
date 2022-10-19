"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // numberDay: DataTypes.INTEGER,
    // numberPerson: DataTypes.INTEGER,
    // departing: DataTypes.DATE,
    // endTime: DataTypes.DATE,
    // userId: DataTypes.INTEGER,
    // TravelCompanyId: DataTypes.INTEGER,
    // adminId: DataTypes.INTEGER,
    await queryInterface.createTable("tourDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numberDay: {
        type: Sequelize.INTEGER,
      },
      numberPerson: {
        type: Sequelize.INTEGER,
      },
      departing: {
        type: Sequelize.DATE,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      TravelCompanyId: {
        type: Sequelize.INTEGER,
      },
      adminId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tourDetails");
  },
};
