'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorites.init({
    faovrites: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};

//add username and post