"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // statusId: DataTypes.STRING,
    // userId: DataTypes.INTEGER,
    // TravelCompanId: DataTypes.INTEGER,
    // bookedAt: DataTypes.STRING, //timety
    // payingPlatform: DataTypes.STRING,
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      statusId: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      TravelCompanId: {
        type: Sequelize.INTEGER,
      },
      bookedAt: {
        type: Sequelize.STRING,
      },
      bookedAt: {
        //timetype
        type: Sequelize.STRING,
      },
      payingPlatform: {
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
    await queryInterface.dropTable("bookings");
  },
};
