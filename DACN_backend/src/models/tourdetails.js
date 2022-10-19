'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TourDetails.init({
    numberDay: DataTypes.STRING,
    numberPerson: DataTypes.STRING,
    departTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    tourID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TourDetails',
  });
  return TourDetails;
};