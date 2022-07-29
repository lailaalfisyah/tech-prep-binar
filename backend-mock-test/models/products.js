'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static inputProduct = ({ name, price, imagerurl }) => {
      return this.create({
        name,
        price,
        imagerurl
      })
    }

    static editProduct = (id, { name, price, imagerurl }) => {
      return this.update({
        name,
        price,
        imagerurl
      }, {
        where: {
          id
        }
      })
    }
  };

  Products.init({
    name: DataTypes.STRING(50),
    price: DataTypes.INTEGER(8),
    imagerurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};