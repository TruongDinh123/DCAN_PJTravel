'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tour.init({
    tourName: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    city: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};